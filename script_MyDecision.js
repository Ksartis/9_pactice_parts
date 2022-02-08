/*
    Задание на урок
    1) создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос: 'Сколько фильмов вы уже посмотрели?'
    
    
 */
'use strict';
// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');



// console.log(numberOfFilms);
/* const personalMovieDB =  {
    count : numberOfFilms,
    movies:'',
    actorus: '',
    genders:[],
    privat: false
};
 */
// console.log(personalMovieDB);

// const titleMovie1 = prompt('Один из просмотренных фильмов');
// const scoresMovie1 = prompt('На сколько оцениваете его?');
// const titleMovie2 = prompt('Один из просмотренных фильмов');
// const scoresMovie2 = prompt('На сколько оцениваете его?');

// const movies = {
//     [titleMovie1] : scoresMovie1,
//     [titleMovie2] : scoresMovie2
// };

const movies = {};

movies[prompt('Один из просмотренных фильмов')] = prompt('На сколько оцениваете его?')
movies[prompt('Один из просмотренных фильмов')] = prompt('На сколько оцениваете его?')
// movies['Фильм'] = 2
console.log(movies);



