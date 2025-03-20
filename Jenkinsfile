pipeline {
    agent any
    parameters {
        choice(name: 'ENVIRONMENT', choices: ['env1', 'env2', 'all'], description: 'Sélectionnez l\'environnement')
    }
    stages {
        stage('build and install') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.51.0-noble'
                }
            }
            steps {
                script {
                    // Install dependencies
                    sh 'npm ci'

                    // Run cucumber tests based on the selected environment
                    if (params.ENVIRONMENT == 'all') {
                        sh 'npx cucumber-js --config cucumber.js --tags "not @ignore"'
                    } else {
                        sh "TAGS='@${params.ENVIRONMENT} and not @ignore' npx cucumber-js --config cucumber.js"
                    }

                    // Stash the results for post-processing
                    stash name: 'allure-results', includes: 'allure-results/*'
                }
            }
        }
    }
    post {
        always {
            // Unstash the allure results
            unstash 'allure-results'

            script {
                // Generate Allure report
                allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']] // Path to the results
                ])
            }
        }
    }
}
