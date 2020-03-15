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
            bat 'npm run build --release'
         }
      }
      
      stage('Publish') {
         steps {
            bat 'npm login --registry=http://localhost:8087/repository/CoopFitness/'
            bat 'npm publish'
         }
      }
      
   }
}
