const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms < 30 ) {
    alert('Вы классический зритель');
}  else if (numberOfFilms >=30) { 
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}


const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actorus: {},
    genders:[],
    privat: false
};

//  let titleMovie = prompt('Один из просмотренных фильмов','');
// let scoresMovie = prompt('На сколько оцениваете его?','')
  

// for(let i = 1; i <= 33;i++){
//       personalMovieDB.movies[titleMovie] = scoresMovie;
// } 



for(let i = 1; i <= 2;i++){
    let titleMovie = prompt('Один из просмотренных фильмов','');
    
    
    if (titleMovie.length === 0 || titleMovie.length >= 50 || titleMovie === ' ' || titleMovie === null ){
        prompt('вы меня не поняли?','');
    } else {
        let scoresMovie = prompt('На сколько оцениваете его?','');  
    }


    personalMovieDB.movies[titleMovie] = scoresMovie;
} 

console.log(personalMovieDB);