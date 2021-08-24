"use strict";
/*
//переменные

let number = 5;
let str = "string";
let bool = true/false;
let null,undefined,NAN,symbol;
const leftBorderWidth =1;
*/

/*
// alert,prompt.confirm
const result = confirm("вопрос?");
alert ("text");
const answer = prompt("вопрос","default ");
console.log(typeOf(answer));*/

const numberOfFilms= +prompt("Сколько фильмов вы уже посмотрелиЬ","");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
const a = prompt("Один из последних просморенныж фильмов?",""),
    b = prompt("На сколько оцените его?",""),
    c = prompt("Один из последних просморенныж фильмов?",""),
    d = prompt("На сколько оцените его?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);