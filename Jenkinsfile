pipeline {
   agent any
      environment {
         PATH='C:/Program Files/Git/usr/bin'
      }
   stages {
      stage('lint') {
         steps {
            bat 'npm install --silent'
         }
      }

      stage('tests') {
         steps {
            bat 'npm test'
         }
      }

      stage('Web Build') {
         steps {
            sh 'ionic build'
         }
      }
      stage('Android Build') {
         steps {
            sh 'npx cap sync'
            sh ' cd android'
            sh './gradlew assembleDebug'
         }
      }
   }
}
