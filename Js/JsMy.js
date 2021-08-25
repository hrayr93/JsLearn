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

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

//loop for (){}
/* for(let i=0;i<2;i++){
     const a = prompt("Один из последних просморенных фильмов?",""),
         b = prompt("На сколько оцените его?","");
         if (a != null && b != null  && a != "" && b !="" && a.length <50 ){
             personalMovieDB.movies[a] = b;
             console.log("done");
         }else{
             console.log("error");
             i--;
         }

}*/
//loop while
let i = 0;
while (i < 2) {
    const a = prompt("Один из последних просморенных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
    i++

}

if (personalMovieDB.count < 10) {
    console.log(1);
} else if (personalMovieDB >= 10 && personalMovieDB < 30) {
    console.log(2);
} else if (personalMovieDB >= 30) {
    console.log(3);
} else {
    console.log("Error");
}
console.log(personalMovieDB);
