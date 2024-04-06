"use strict";
const numberOfFilms = 5;

let personalMovieDB = {
    'count' : numberOfFilms,
    'movies' : {},
    'actors' : {},
    'genres' : [],
    'privat' : false
};

let movieName = prompt("Один из последних просмотренных фильмов?", '');
let movieRating = +prompt("На сколько оцените его?", "5");

personalMovieDB.movies[movieName] = movieRating;

movieName = prompt("Один из последних просмотренных фильмов?", "");
movieRating = +prompt("На сколько оцените его?", "5");
personalMovieDB.movies[movieName] = movieRating;

console.log(personalMovieDB.movies);