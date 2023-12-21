import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import filterMovies from '../../utils/config';
import { mainApi } from '../../utils/MainApi';

function SavedMovies({ savedMovies, onDelete, isLoading, error, setSavedMovies, userSessionChanged}) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [conditions, setConditions] = useState()
  const [currentQuery, setCurrentQuery] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);

  const handleSearch = (query) => {
    setCurrentQuery(query);
    const result = filterMovies(savedMovies, query, isShortMovies);
    setFilteredMovies(result);
  };

  const handleCheckboxChange = (checked) => {
    setIsShortMovies(checked);
    const result = filterMovies(savedMovies, currentQuery, checked);
    setFilteredMovies(result);
  };

  useEffect(() => {
    const result = filterMovies(savedMovies, currentQuery, isShortMovies);
    setFilteredMovies(result);
  }, [savedMovies])

  useEffect(() => {
    console.log();
    mainApi.getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.error('Ошибка при получении сохраненных фильмов: ', err);
      });
  }, [userSessionChanged]);

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
    return (
      <MoviesCardList
        movies={filteredMovies}
        onDelete={onDelete}
        isSavedMoviePage={true}
        savedMovies={savedMovies}
      />
    );
  };

  return (
    <section className='saved-movies'>
      <SearchForm
        onSearch={handleSearch}
        isChecked={isShortMovies}
        setChecked={handleCheckboxChange}
      />
      {renderContent()}
    </section>
  );
}

export default SavedMovies;