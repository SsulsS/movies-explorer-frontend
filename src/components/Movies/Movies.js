import './Movies.css';
import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import filterMovies from '../../utils/config';
import { moviesApi } from '../../utils/MoviesApi';


function Movies({ movies, error, onSave, savedMovies, setAllMovies, setError}) {
  const [query, setQuery] = useState(localStorage.getItem('searchQuery') || '');
  const [isChecked, setChecked] = useState(localStorage.getItem('isShortFilmChecked') === 'true');
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('filteredMovies')) || []);
  const [inputValue, setInputValue] = useState(localStorage.getItem('inputValue') || '');
  const [isLoading, setIsLoading] = useState(false);
  const [request, setRequest] = useState(false)

  useEffect(() => {
     localStorage.setItem('searchQuery', query);
  }, [query]);

  useEffect(() => {
     localStorage.setItem('isShortFilmChecked', isChecked.toString());
  }, [isChecked]);

  useEffect(() => {
     localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  }, [filteredMovies]);

  useEffect(() => {
     localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);

  useEffect(() => {
   if(movies.length>0){
      const result = filterMovies(movies, query, isChecked);
      setFilteredMovies(result);
   }
     
  }, [movies, query, isChecked]);

  const HandleRequest = () => {
      setIsLoading(true);
      moviesApi.getInitialMovies()
      .then((data) => {
         setAllMovies(data);
         setIsLoading(false);
      })
      .catch((err) => {
         console.error('Ошибка при получении фильмов: ', err);
         setError('Ошибка при загрузке фильмов');
         setIsLoading(false);
      });
      setRequest(true)
   } 

  const handleSearchMovies = (newQuery) => {
      if (!request){HandleRequest()}
      const lowercaseQuery = newQuery.toLowerCase();
      const searchResult = movies.filter(movie =>
        movie.nameRU.toLowerCase().includes(lowercaseQuery)
     );
     console.log(3,filteredMovies);
     setFilteredMovies(searchResult);
     setQuery(newQuery); 
  };

  const renderContent = () => {
     if (isLoading) {
        return <Preloader isLoading={isLoading}/>;
     }
     if (error) {
        return <p>{error}</p>;
     }
     if (filteredMovies.length === 0 && request) {
        return <p>Ничего не найдено</p>;
     }
     return <MoviesCardList
        movies={filteredMovies}
        isSavedMoviePage={false}
        onSave={onSave}
        savedMovies={savedMovies}
     />;
  };

  return (
    <section className="movies">
      <SearchForm
            onSearch={(query) => handleSearchMovies(query)}
            isChecked={isChecked}
            setChecked={setChecked}
            initialValue={inputValue}
            onInputChange={setInputValue}
         />
      {renderContent()}
    </section>
  );
};

export default Movies;
