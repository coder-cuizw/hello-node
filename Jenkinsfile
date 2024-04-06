pipeline {
    agent any
    stages {
        stage('打包') {
            steps {
                script {
                    docker.build("hello-node")
                }
            }
        }
        stage('测试') {
            steps {
                script {
                    docker.run("hello-node", "npm test")
                }
            }
        }
        stage('部署') {
            steps {
                // 添加部署到生产环境的步骤
                echo 'Deploying...'
            }
        }
    }
}
