pipeline {
    agent any
    tools {
        nodejs "NodeJS_16.20.2"
    }
    stages {
        stage('检出代码') {
            steps {
                git branch: 'main', url: 'https://github.com/coder-cuizw/hello-node.git'
            }
        }
        stage('安装依赖') {
            steps {
                sh 'npm install'
            }
        }
        stage('运行') {
            steps {
                sh 'nohup node app.js > app.log 2>&1 &'
            }
        }
    }
}
