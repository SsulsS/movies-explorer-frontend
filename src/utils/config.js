export const BASE_URL = "https://api.nomoreparties.co/";
export const BASE_BEATFILMMOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const BASE_URL_MAIN = 'https://api.movies.ssulss.nomoredomainsrocks.ru';

export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
export const NAME_REGEX = /^[a-zA-Zа-яА-Я\s-]+$/;

export const LARGE_SCREEN_WIDTH = 1160;
export const MEDIUM_SCREEN_WIDTH = 660;
export const LARGE_SCREEN_CARDS_COUNT = 12;
export const MEDIUM_SCREEN_CARDS_COUNT = 8;
export const SMALL_SCREEN_CARDS_COUNT = 5;
export const LARGE_SCREEN_ADDITIONAL_CARDS_COUNT = 3;
export const SMALL_MEDIUM_SCREEN_ADDITIONAL_CARDS_COUNT = 2;

export const formatDuration = (duration) => {
   const hours = Math.floor(duration / 60);
   const minutes = duration % 60;
   return `${hours}ч ${minutes}м`;
};

export default function filterMovies(movies, query, showShortMovies) {
   let filteredMovies = movies.filter(movie => {
      const movieNameRU = movie.nameRU.toLowerCase();
      const movieNameEN = movie.nameEN ? movie.nameEN.toLowerCase() : "";
      return movieNameRU.includes(query.toLowerCase()) || movieNameEN.includes(query.toLowerCase());
   });
   if (showShortMovies) {
      filteredMovies = filteredMovies.filter(movie => movie.duration <= 40);
   }
   return filteredMovies;
}