pipeline {
   agent any
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
            bat 'npm build'
         }
      }
      stage('Android Build') {
         steps {
            bat 'npx cap sync'
            bat ' cd android'
            bat './gradlew assembleDebug'
         }
      }
   }
}
