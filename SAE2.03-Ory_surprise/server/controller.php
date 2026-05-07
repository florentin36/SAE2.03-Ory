<?php

/** ARCHITECTURE PHP SERVEUR  : Rôle du fichier controller.php
 * 
 *  Dans ce fichier, on va définir les fonctions de contrôle qui vont traiter les requêtes HTTP.
 *  Les requêtes HTTP sont interprétées selon la valeur du paramètre 'todo' de la requête (voir script.php)
 *  Pour chaque valeur différente, on déclarera une fonction de contrôle différente.
 * 
 *  Les fonctions de contrôle vont éventuellement lire les paramètres additionnels de la requête, 
 *  les vérifier, puis appeler les fonctions du modèle (model.php) pour effectuer les opérations
 *  nécessaires sur la base de données.
 *  
 *  Si la fonction échoue à traiter la requête, elle retourne false (mauvais paramètres, erreur de connexion à la BDD, etc.)
 *  Sinon elle retourne le résultat de l'opération (des données ou un message) à includre dans la réponse HTTP.
 */

/** Inclusion du fichier model.php
 *  Pour pouvoir utiliser les fonctions qui y sont déclarées et qui permettent
 *  de faire des opérations sur les données stockées en base de données.
 */
require("model.php");


function ajoutController(){

    $titre = $_POST['titre'];
    $realisateur = $_POST['realisateur'];
    $annee = $_POST['date'];
    $duree = $_POST['duree'];
    $synopsis = $_POST['synopsis'];
    $categorie = $_POST['categorie'];
    $image = $_POST['image'];
    $trailer = $_POST['trailer'];
    $age = $_POST['age'];

    // Mise à jour du menu à l'aide de la fonction updateMenu décrite dans model.php
    $ok = ajoutFilm($titre,$realisateur,$annee,$duree,$synopsis,$categorie,$image,$trailer,$age);
    // $ok est le nombre de ligne affecté par l'opération de mise à jour dans la BDD (voir model.php)
    if ($ok!=0){
        return "Le film $titre à été ajouter à la base de donné";
    }
    else{
        return false;
    }
}

function ajoutProfilController(){

    $nom = $_POST['nom'];
    $image = $_POST['image'];
    $age = $_POST['age'];
    // Mise à jour du menu à l'aide de la fonction updateMenu décrite dans model.php
    $ok = ajoutProfil($nom,$image,$age);
    // $ok est le nombre de ligne affecté par l'opération de mise à jour dans la BDD (voir model.php)
    if ($ok!=0){
        return "Le profil $nom à été ajouter à la base de donné";
    }
    else{
        return false;
    }
}

function updateProfilController(){

    $nom = $_POST['nom'];
    $image = $_POST['image'];
    $age = $_POST['age'];
    $id = $_POST['id'];
    $ok = updateProfil($nom,$image,$age,$id);
    if ($ok!=0){
        return "Le profil $nom à été mis a jour";
    }
    else{
        return false;
    }
}

function ajoutfavoriController($idP,$idF){
    $ok = ajoutFavori($idP,$idF);
    if ($ok!=0){
        return "Le film à été mis en favori";
    }
    else{
        return false;
    }
}

function enlevefavoriController($idP,$idF){
    // appeler la fonction modèle qui supprime le favori
    $ok = enleveFavori($idP,$idF);
    if ($ok!=0){
        return "Le film a été enlevé des favoris";
    }
    else{
        return false;
    }
}

function verifierfavoriController($idP,$idF){
    $fav = verifierFavori($idP,$idF);
    return $fav;
}

function readProfilsController(){
    $profils = getAllProfils();
    return $profils;
}

function readFavorisController($idP){
    $fav = getFavoris($idP);
    return $fav;
}

function readMoviesController(){
    $movies = getAllMovies();
    return $movies;
}

function readmoviescategoryController($categ,$ageP){
    $movies = getMoviesCategory($categ,$ageP);
    return $movies;
}

function readprofilIDController($id){
    $profil = getprofilID($id);
    return $profil;
}

function readcategoryController(){
    $categ = getcategory();
    return $categ;
}

function readcategoryexistController(){
    $categ = getcategoryExist();
    return $categ;
}

function readFullMovieController($id){
    $fullMovie = getFullMovie($id);
    return $fullMovie;
}