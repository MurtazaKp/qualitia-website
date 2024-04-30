pipeline {
    agent any

    environment {
        SSH_USER = "ubuntu"
        SSH_HOST = "34.205.172.139"
        DIR = "/data/projects/cubyts-website/"
        SSH_KEY = credentials('your-ssh-private-key-id')
//        DOCKER_COMPOSE_FILE = "/path/to/docker-compose.yml"
        DOCKER_COMPOSE_PROJECT_NAME = "dev-cubyts"
    }

    stages {
//        stage('Checkout') {
//            steps {
//                checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'your-git-credentials-id', url: 'https://github.com/your/repo.git']]])
//           }
//        }
//
//       stage('Build and Test') {
//            steps {
//               // run any build and test steps you need here
//            }
//      }

        stage('Deploy') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'your-ssh-private-key-id', keyFileVariable: 'SSH_KEY')]) {
                    sshagent(['your-ssh-private-key-id']) {
                        // copy the docker-compose file to the remote server
                        //sh "scp -i ${SSH_KEY} ${DOCKER_COMPOSE_FILE} ${SSH_USER}@${SSH_HOST}:${DIR}/"

                        // ssh into the remote server and run docker-compose
                        sshCommand remote: "ssh -i ${SSH_KEY} ${SSH_USER}${@SSH_HOST} 'cd ${DIR}/ && git pull && docker-compose --project-name ${DOCKER_COMPOSE_PROJECT_NAME} up -d'"
                    }
                }
            }
        }
    }
}
