const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?" , "Пока не смотрел");
const personalMovieDB = {
count: numberOfFilms,
movie: {},
actors: {},
genres : [],

private : false

};

const a = prompt("Один из последних просмотрених фильмов?" , ""),
      b = prompt("На сколько оцените его?" , ""),
      c = prompt("Один из последних просмотрених фильмов?" , ""),
      d = prompt("На сколько оцените его?" , "");


personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);