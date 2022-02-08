const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actorus: {},
    genders:[],
    privat: false
};

const titleMovie1 = prompt('Один из просмотренных фильмов',''),
    scoresMovie1 = prompt('На сколько оцениваете его?',''),
    titleMovie2 = prompt('Один из просмотренных фильмов',''),
    scoresMovie2 = prompt('На сколько оцениваете его?','');

personalMovieDB.movies[titleMovie1] = scoresMovie1;
personalMovieDB.movies[titleMovie2] = scoresMovie2;

console.log(personalMovieDB);