pipeline {
    agent any
    stages {
        stage('build and install') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.51.0-noble'
                }
            }

            steps {
                script {
                    // Create a reports directory (if not already present)
                    sh 'mkdir -p reports'
                    
                    // Install npm dependencies
                    sh 'npm ci'
                    
                    // Run cucumber tests with a fixed tag and output the results to a JSON file
                    sh 'npx cucumber-js --tags @login --format json:reports/cucumber-report.json'
                    
                    // Stash the allure results directory for post-processing
                    stash name: 'allure-results', includes: 'allure-results/*'
                }
            }
        }
    }
    post {
        always {
            // Unstash the allure results for processing
            unstash 'allure-results'
            
            script {
                // Run allure report generation and handle it
                allure([
                    commandline: 'allure',  // You can modify this if you want to use a specific allure command
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]  // Path to the Allure results
                ])
            }
        }
    }
}
