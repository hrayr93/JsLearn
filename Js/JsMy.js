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

/* learn 1 ---------------------------------------------------------------------
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

//loop for (){}
/!* for(let i=0;i<2;i++){
     const a = prompt("Один из последних просморенных фильмов?",""),
         b = prompt("На сколько оцените его?","");
         if (a != null && b != null  && a != "" && b !="" && a.length <50 ){
             personalMovieDB.movies[a] = b;
             console.log("done");
         }else{
             console.log("error");
             i--;
         }

}*!/
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
console.log(personalMovieDB);*/

// function -------------------------------------------------
function showFirstMessage (text,text1){
    console.log(text);
    console.log(text1);
    let num = 20;
}
showFirstMessage( "hello World!","ok");
//function expression
const logger = function(){
    console.log("hello");
};
logger();
// =>
const calc = (a,b)=>{return a+b};

//--------------------------------- Method
let str = "testafafaggagqgqg";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("e"));
console.log(str.slice(2,4));
console.log(str.substring(2,4));
console.log(str.substr(2,4));//cut
//---number
const num = 12.2;
console.log(Math.round(num));
const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
//---------------Object---------

// const obj1 = new Object();
const options = {
    name:"test",
    width:1024,
    height: 1024,
    colors:{
        border:'black',
        bg:"red",
    },
    makeTest : function(){
        console.log("Test")
    }

};
/*
delete options.name;
console.log(options);*/

for (let key  in options){
    if(typeof(options[key]) === "object"){
        for(let i in options[key]){
            console.log(`свойства ${i} имеет значения ${options[key][i]}`)
        }
    } else { console.log(`свойства ${key} имеет значения ${options[key]}`)}

}
const {border,bg} = options.colors;
options.makeTest();
console.log(Object.keys(options).length);
