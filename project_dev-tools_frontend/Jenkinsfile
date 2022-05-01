pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                checkout scm
            }
        }
        stage('Download dependency') {
            steps {   
                sh 'cd project_dev-tools_frontend && rm -rf node_modules/'
                sh 'cd project_dev-tools_frontend && npm install'
            }
        }
        stage('Unit test') {
            steps {
                dir('./project_dev-tools_frontend') {
                sh 'npm run test:unit'
                publishHTML target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: "./coverage/lcov-report",
                        reportFiles: "index.html",
                        reportName: 'Unit Test Coverage Report'
                ]
                    publishHTML target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: "./coverage",
                        reportFiles: "report.html",
                        reportName: 'Unit Test Report'
                    ]
                }
            }
        }
        stage('Component test') {
            steps {
                dir('./project_dev-tools_frontend')  {
                    sh 'npm run cypress:run'
                    publishHTML target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: "./coverage/lcov-report",
                        reportFiles: "index.html",
                        reportName: 'Coverage Component Test Report'
                    ]
                    publishHTML target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: "./coverage",
                        reportFiles: "report.html",
                        reportName: 'Component Test Report'
                    ]
                }
            }
        }
        stage("Code coverage report") {
            steps {
                clover(cloverReportDir: './project_dev-tools_frontend/coverage', cloverReportFileName: 'clover.xml',
                    healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80],
                    unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50],
                    failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]
                )
            }
        }
        stage('Deployment') {
            steps {
                withCredentials([string(credentialsId: 'T01_HOST_NAME', variable: 'NAME'), string(credentialsId: 'T01_FRONTEND_HOST', variable: 'HOST'), usernamePassword(credentialsId: 'T01_HOST_ACCOUNT', passwordVariable: 'PASSWORD', usernameVariable: 'USER')]) {
                    script{
                        def remote = [:]
                        remote.name = NAME
                        remote.host = HOST
                        remote.user = USER
                        remote.password = PASSWORD
                        remote.allowAnyHosts = true
                        
                        sshCommand remote: remote, command: "git clone -b main https://github.com/Flukena/project-sw-dev-and-env.git"
                        sshCommand remote: remote, command: "docker-compose -f project-sw-dev-and-env/docker-compose-deploy-frontend.yml down"
                        sshCommand remote: remote, command: "docker-compose -f project-sw-dev-and-env/docker-compose.yml build --no-cache app"
                        sshCommand remote: remote, command: "docker-compose -f project-sw-dev-and-env/docker-compose-deploy-frontend.yml up -d"
                        sshCommand remote: remote, command: "rm -r project-sw-dev-and-env"
                    }
                }
            }
        }
    }
}


