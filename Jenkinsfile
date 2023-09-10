pipeline {
  agent any
  environment {
    IMAGE_NAME = "silvatree-silvapay"
    IMAGE_TAG = "dev"
    AWS_REGION = "eu-west-1"
    AWS_DEFAULT_REGION = "eu-west-1"
    AWS_ACCOUNT_URL = "https://075929790289.dkr.ecr.eu-west-1.amazonaws.com"
    INSTANCE_IP = '3.253.205.68'
  }
  stages {
    stage('Build'){ 
        steps {
            echo 'Building'
            script {
              def myImage = docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                docker.withRegistry("${AWS_ACCOUNT_URL}", "ecr:${AWS_DEFAULT_REGION}:silvatree-ecr-creds") {
                  myImage.push("${IMAGE_TAG}")
                }
              echo "${env.GIT_BRANCH}"
            }
        }
    }
    stage('Deploy'){
        steps {
                echo 'Deployment'
            sshagent(credentials: ['silvatree-key']) {
                sh '''
                ssh -o StrictHostKeyChecking=no 'ubuntu'@${INSTANCE_IP} uname -a
                ssh -o StrictHostKeyChecking=no 'ubuntu'@${INSTANCE_IP} "ssh -i /home/ubuntu/keys/silva-test-server.pem ubuntu@17.0.98.243 sh /home/ubuntu/scripts/silvatree-silvapay.sh"
                '''
                }
            }
    }
  }

post { 
        always { 
            cleanWs()
        }
    }
}
