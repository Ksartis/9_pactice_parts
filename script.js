let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '25');
    }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actorus: {},
    genres:[],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i ++) {
        const a = prompt('Один из просмотренных фильмов?', ' '),
              b = prompt('На сколько оцениваете его?', ' ');
        if (a && null && b != null && a !='' && b != '' && b != isNaN(b) || a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && numberOfFilms < 30 ) {
        console.log('Вы классический зритель');
    }  else if (personalMovieDB.count >=30) { 
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB); 
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenders() {
    for (let i = 1; i <= 3; i++) {
        
    personalMovieDB.genres[i-1] =prompt(`Ваш любимый жанр под номером ${i}`);
    }
    
}
writeYourGenders(); 



