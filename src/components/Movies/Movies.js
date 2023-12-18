import './Movies.css';
import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import filterMovies from '../../utils/config';


function Movies({ movies, error, isLoading, onSave, savedMovies  }) {
  const [query, setQuery] = useState(localStorage.getItem('searchQuery') || '');
  const [isChecked, setChecked] = useState(localStorage.getItem('isShortFilmChecked') === 'true');
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('filteredMovies')) || []);
  const [inputValue, setInputValue] = useState(localStorage.getItem('inputValue') || '');

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
     const result = filterMovies(movies, query, isChecked);
     setFilteredMovies(result);
  }, [movies, query, isChecked]);

  const handleSearchMovies = (newQuery) => {
     const lowercaseQuery = newQuery.toLowerCase();
     const searchResult = movies.filter(movie =>
        movie.nameRU.toLowerCase().includes(lowercaseQuery)
     );
     setFilteredMovies(searchResult);
     setQuery(newQuery); 
  };

  const renderContent = () => {
     if (isLoading) {
        return <Preloader />;
     }
     if (error) {
        return <p>{error}</p>;
     }
     if (filteredMovies.length === 0) {
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
