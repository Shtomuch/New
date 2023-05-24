const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?" , "Пока не смотрел");
const personalMovieDB = {
count: numberOfFilms,
movie: {},
actors: {},
genres : [],

private : false

};


for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотрених фильмов?" , ""),
          b = prompt("На сколько оцените его?" , "");

          if(a != null && b != null && a != "" && b != "" && a.length < 50){
            personalMovieDB.movie[a] = b;
            console.log("done");
          }
          else {
            console.log("error");
            i--;
          }
          
    
}

if(personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов"); 
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
    console.log("Вы класический зритель"); 
} else if(personalMovieDB.count >=30){
    console.log("Заняться нехуй")
} else{
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);