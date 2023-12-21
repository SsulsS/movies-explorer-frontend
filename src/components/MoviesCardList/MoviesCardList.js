import './MoviesCardList.css';
import React, { useState, useEffect } from 'react';
import MovieCard from '../MoviesCard/MoviesCard';
import {
  LARGE_SCREEN_WIDTH, MEDIUM_SCREEN_WIDTH,
  SMALL_MEDIUM_SCREEN_ADDITIONAL_CARDS_COUNT,
  LARGE_SCREEN_CARDS_COUNT, MEDIUM_SCREEN_CARDS_COUNT,
  SMALL_SCREEN_CARDS_COUNT, LARGE_SCREEN_ADDITIONAL_CARDS_COUNT,
} from '../../utils/config';

function MoviesCardList({ movies, onSave, savedMovies, onDelete, isSavedMoviePage }) {
  const [displayedMovies, setDisplayedMovies] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let count;
      if (isSavedMoviePage) count = savedMovies.length;
      else if (width >= LARGE_SCREEN_WIDTH) count = LARGE_SCREEN_CARDS_COUNT;
      else if (width >= MEDIUM_SCREEN_WIDTH) count = MEDIUM_SCREEN_CARDS_COUNT;
      else count = SMALL_SCREEN_CARDS_COUNT;
      setDisplayedMovies(movies.slice(0, count));
    };

    handleResize();
    const resizeTimeout = setTimeout(handleResize, 300);
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [movies]);

  const handleMoreButtonClick = () => {
    const currentCount = displayedMovies.length;
    const width = window.innerWidth;
    let additionalCount;

    if (width >= LARGE_SCREEN_WIDTH + 1) {
      additionalCount = LARGE_SCREEN_ADDITIONAL_CARDS_COUNT;
    } else {
      additionalCount = SMALL_MEDIUM_SCREEN_ADDITIONAL_CARDS_COUNT;
    }

    setDisplayedMovies(movies.slice(0, currentCount + additionalCount));
  };

  return (
    <div className='cards'>
      <div className='cards__container'>
        {displayedMovies.map(movie => {
          return (
            <MovieCard
              movie={movie}
              isSavedMoviePage={isSavedMoviePage}
              onSave={onSave}
              savedMovies={savedMovies}
              onDelete={onDelete}
            />);
        })}
      </div>
      {displayedMovies.length < movies.length && (
        <div className='cards__more'>
          <button className='cards__button' type='button' onClick={handleMoreButtonClick}>
            Ещё
          </button>
        </div>
      )}
    </div>
  );
}

export default MoviesCardList;
