pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/SrriHariTR/devOps-nodejs-ci-cd.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test Application') {
            steps {
                bat 'node --check server.js'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t nodejs-status-api .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker rm -f nodejs-status-container || exit /b 0'
                bat 'docker run -d -p 3000:3000 --name nodejs-status-container nodejs-status-api'
            }
        }
    }
}