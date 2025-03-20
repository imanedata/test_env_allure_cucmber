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
                    //sh 'mkdir -p reports'
                    sh 'npm ci'
                    
                    if (params.ENVIRONMENT == 'all') {
                        sh 'npx cucumber-js --config cucumber.js --tags "not @ignore"'
                    } else {
                        sh "TAGS='@${params.ENVIRONMENT} and not @ignore' npx cucumber-js --config cucumber.js"
                    }
                    //sh 'npx cucumber-js --format json:reports/cucumber-report.json'
                    //sh "npx cucumber-js --tags @${params.ENVIRONMENT} --format json:reports/cucumber-report.json"
                    //sh 'npx cucumber-js'
                    //sh "TAGS='@${params.ENVIRONMENT}' npx cucumber-js --config cucumber.js"
                    stash name: 'allure-results', includes: 'allure-results/*'
                }
            }
        }
    }
    post {
        always {
            //sh 'ls -al reports/' 

            // cucumber buildStatus: 'UNSTABLE',
            //         failedFeaturesNumber: 1,
            //         failedScenariosNumber: 1,
            //         skippedStepsNumber: 1,
            //         failedStepsNumber: 1,
            //         classifications: [
            //                 [key: 'Commit', value: '<a href="${GERRIT_CHANGE_URL}">${GERRIT_PATCHSET_REVISION}</a>'],
            //                 [key: 'Submitter', value: '${GERRIT_PATCHSET_UPLOADER_NAME}']
            //         ],
            //         reportTitle: 'My report',
            //         fileIncludePattern: 'reports/cucumber-report.json', // Corrige le chemin d'inclusion
            //         sortingMethod: 'ALPHABETICAL',
            //         trendsLimit: 100
            unstash 'allure-results' //extract results
            script {
                allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])
            }
        }
    }
}
