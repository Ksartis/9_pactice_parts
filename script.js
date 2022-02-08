/*
    Задание на урок
    1) создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос: 'Сколько фильмов вы уже посмотрели?'
    
    
 */
'use strict';
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');



// console.log(numberOfFilms);
const personalMovieDB =  {
    count : numberOfFilms,
    movies:'',
    actorus: '',
    genders:[],
    privat: false
};

console.log(personalMovieDB);


