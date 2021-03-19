# Tp2 WE (Angular)
***
Arnaud AKOTO & Maurice MBILIA
***
Ce projet est dans la forme différent du TP2 de WE mais dans l'ensemble, nous avons mis en oeuvre les même consignes.

 ## Qu'est-ce que "TP2 WE (Angular)"
 `TP2 WE (Angular)` est une application permettant de rechercher des films et d'afficher leur description en français.
 Elle utilise notamment l'API [TMDb](https://www.themoviedb.org/) pour accéder aux informations des films.

## composition de l'application
 Notre application est composée de 5 `components` et de 3 `services`.

 ## Components

### Post
Le component `post` représente la structure des informations pour un film.
dans le fichier `post.component.html` qui permet d'afficher une vue globale d'un film, nous utilisons des `pipes` pour formater  l'affichage à notre souhait.
Nous avons intégré une simulation de bouton like.

### Post-view
grace à `post-view`, on affiche la liste de films Avec en plus une fonction permettant de `filtrer` le contenu. 
`post-view.components.html` affiche la liste des films avec la directive `ngFor` et contient un `input` qui permet de `rechercher` des films avec leur titre en français  

### Single-post
`single-post` permet d'obtenir les détails pour un film donné et lui assigner une route.
L'affichage est assez minimaliste avec une barre de progression statique

### Auth
Nous simulons dans le component `Auth`, une authentification sans laquelle on ne peut pas avoir accès aux détails des films.
### Four-oh-four
Page 404 
___
## services
Les services permettent une interaction plus structurée entres les components.
Ils contiennent l'essentiel des opérations effectuées par nos components

### Auth
Ici on utilise `Promise` pour le traitement asynchrone des données. 
Ce service permet de se connecter ou de se déconnecter.
### Auth-guard
Avec `auth-guard` on Vérifie si on est connecté ou pas.
### Post
`post.service` est le service le plus important de notre projet.
C'est là qu'on implémente les méthodes  pour récupérer le film avec son `id`, le `filtre` et surtout  la requête `HTTP` permettant d'accéder aux informations de films.

***
## Lancer "TP2 WE (Angular)"

Si vous n'avez pas angular CLI installer sur votre machine [cliquez ici](https://angular.io/guide/setup-local)

### Option1 : lancement en développement
+ Exécutez :
```
ng serve
```
+ Sur votre navigateur, Accédez à "http://localhost:4200" 

### Option 2 : lancement en production

+ Avant de lancer l'application vous devez préalablement le build avec la commende suivante depuis le répertoire du projet : 

```bash
ng build --prod
``` 

+ L'action précédente génère le dossier "`dist`" qui contient les fichiers prêts à être déployés. Copier les dans le répertoire de votre serveur (apache , nginx ou autre) vous aurez préalablement paramétré.

+ Lancez votre serveur et entrez l'uri de l'application dans votre navigateur.

***
### Exemple de paramétrage nginx
```nginx
server{

	server_name my-app;
	keepalive_timeout 5;
	root /var/www/tp2_angular;
	charset utf-8;
	

	  location / {
        try_files $uri $uri/ /index.html;
       }
	
	listen localhost:80;
}

```
***