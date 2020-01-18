pipeline {
   agent any

   stages {
      stage('Checkout') {
         steps {
            checkout([$class: 'GitSCM', branches: [[name: '*/develop']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/fhoubart/demo-cicd.git']]])
         }
      }
      stage('Get info from POM') {
          steps {
            script {
                pom = readMavenPom file: 'pom.xml'
                groupId = pom.groupId
                artifactId = pom.artifactId
                packaging = pom.packaging
                version = pom.version
                filepath = "target/${artifactId}-${version}.jar"
                isSnapshot = version.endsWith("-SNAPSHOT")
            }
            echo groupId
            echo artifactId
            echo packaging
            echo version
            echo filepath
            echo "isSnapshot: ${isSnapshot}"
          }
      }
      stage('Build') {
          steps {
              sh 'mvn clean package'
          }
      }
      
      /*
      Ce stage ne se lance que si isSnapshot est vrai
      Comme on pousse un Snapshot, on utilise le plugin deploy:deploy-file, cela permet de ne pas mettre les paramètres du Repo dans le pom.xml
      */
      stage('Push SNAPSHOT to Nexus') {
          when { expression { isSnapshot } }
          steps {
              sh "mvn deploy:deploy-file -e -DgroupId=${groupId} -Dversion=${version} -Dpackaging=${packaging} -Durl=${nexusUrl}/repository/${nexusRepoSnapshot} -Dfile=${filepath} -DartifactId=${artifactId} -DrepositoryId=${mavenRepoId}"

          }
      }
     
     /*
     Ce stage ne se lance que si isSnapshot est faux
     On pousse la release via le plugin Nexus
     */
      stage('Push RELEASE to Nexus') {
          when { expression { !isSnapshot } }
          steps {
            nexusPublisher nexusInstanceId: 'nexus_localhost', nexusRepositoryId: "${nexusRepoRelease}", packages: [[$class: 'MavenPackage', mavenAssetList: [[classifier: '', extension: '', filePath: "${filepath}"]], mavenCoordinate: [artifactId: "${artifactId}", groupId: "${groupId}", packaging: "${packaging}", version: "${version}"]]]
          }
      }
   }
}