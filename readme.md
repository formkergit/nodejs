# Node.js avec Docker

Initiation à **Node**.js et **Docker**

Utilisez Docker pour isoler un environnement **Node.js**

***

## Docker

- **Docker** est une plateforme **open source** de **conteneurisation** qui permet de **créer**, **déployer** et **gérer** des applications dans des **conteneurs** légers et portables
- Un **conteneur** **Docker** contient tout le nécessaire pour faire **fonctionner** une application : **code**, **bibliothèques**, **dépendances**, etc., **isolé** et **indépendant** du **système d'exploitation** **hôte**
- Contrairement à une **machine virtuelle**, **Docker** partage le noyau du système hôte tout en **isolant** les **processus**, ce qui le rend plus **léger** et plus **rapide** au **démarrage**

***

- Les **conteneurs** permettent de garantir que l’application **fonctionne** de manière **identique** dans tous les **environnements**, qu’il s’agisse de l’ordinateur du développeur, d’un serveur de test, ou d’un serveur de production
- **Docker** facilite le cycle de **développement** logiciel en automatisant la construction, le déploiement et la gestion des applications conteneurisées
- Des outils complémentaires comme **Docker Compose** permettent l’**orchestration** et la **gestion** de plusieurs **conteneurs** 

***

## Node.js  

- **Node.js** est un **environnement d’exécution** **JavaScript** construit sur le moteur **V8** de Google, permettant d’**exécuter** du **JavaScript** côté **serveur**
- Il est conçu pour construire des **applications** **réseau** rapides et évolutives, notamment des **serveurs web**
- **Node.js** travaille de manière **asynchrone** et **événementielle**, ce qui permet de **gérer** un grand nombre de **connexions** **simultanées** avec une haute performance

***

- **Node.js** permet d’utiliser **JavaScript** en **dehors** du **navigateur**, facilitant le développement full stack et l’utilisation du même **language** côté **client et serveur**
- **Node.js** dispose d’un **gestionnaire de paquets** appelé **npm**, qui facilite l’**installation** et la **gestion** des bibliothèques tierces
- Très utilisé pour le développement d’**API**, de **microservices**, et d’**applications web** en **temps réel**

***

## Initialisation d'un projet Node.js

Commande rapide pour démarrer un projet :

`npm init -y`

***

## Lancement avec Docker

Démarrage d'un conteneur interactif :


`docker run -it --rm -v ${PWD}:/app -p 8080:7000 --entrypoint sh node:24-alpine`

Exécuter une application Node.js :

`docker run -it --rm -v ${PWD}:/app -p 8080:7000 node:24-alpine node app/server.js`

***

## Explication des parametes passés à la commande Docker

`docker run` : commande pour **créer** et **démarrer** un **nouveau** **conteneur** à partir d'une image **Docker**

`-it` : combinaison de deux options qui permettent d'avoir un **terminal** **interactif** 

`--rm` : supprime automatiquement le conteneur lorsque celui-ci s'arrête, évitant ainsi d'encombrer l'environnement avec des conteneurs arrêtés

***

`-v ${PWD}:/app` : crée un **volume**, montant le répertoire actuel (`${PWD}` pour "Print Working Directory") de l'hôte dans le conteneur à l'emplacement `/app`. Cela permet de partager des fichiers entre l'hôte et le conteneur

Attention il faut adapter **${PWD}** au terminal utilisé sous **Windows** entre **PowerShell** et **git bash**

`-p 8080:7000` : **mappe** le **port** 7000 du conteneur (serveur) au port 8080 de l'hôte (client), permettant à des services dans le conteneur d'être accessibles via le port 8080 local

***

`--entrypoint sh` : remplace le point d'entrée (entrypoint) par défaut de l'image par la commande `sh` (shell). Cela signifie que le conteneur va démarrer sur un shell interactif

`node:24-alpine` : image **Docker** à utiliser, ici une version alpine (allégée) de **Node.js** version 24

***

## Gestion avancée des conteneurs

Spécifier le répertoire de travail & démarrer le serveur :

`docker run -it --rm -v ${PWD}:/app -w /app -p 8080:7000 node:24-alpine node server.js`

Créer puis démarrer un conteneur nommé :

`docker run -it --name notreapp -v ${PWD}:/app -w /app -p 8080:7000 --entrypoint sh node:24-alpine`

Démarrer aun conteneur avec start : `docker start notreapp`

Entrer dans un conteneur pour effectuer des taches : `docker exec -it notreapp sh`
  
***

## Liens Ressources :

- [Node.js](https://nodejs.org/fr)
- [Maîtriser Docker 🐳 : conteneurs, images et bonnes pratiques](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/)
- [NPM (gestionnaire de paquets)](https://www.npmjs.com)
- [Les méthodes HTTP](https://api-pour-apprendre.fr/http/verbes)
- [Les codes de statut HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Status)
