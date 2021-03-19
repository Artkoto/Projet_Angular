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

