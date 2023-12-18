import './MoviesCard.css';
import { BASE_URL } from '../../utils/config';
import { formatDuration } from '../../utils/config';

function MovieCard({ movie, isSavedMoviePage, onSave, onDelete, savedMovies }) {
  const imageUrl = isSavedMoviePage ? movie.image : BASE_URL + movie.image.url;
  const isSaved = savedMovies.some(item => item?.movieId === movie.id);

  const handleSave = () => {
    onSave(movie);
  };

  const handleDelete = () => {
    onDelete(movie);
  };

  return (
    <div className='card'>
      <div className='card__image-container'>
        <a href={movie.trailerLink} target="blank">
          <img src={imageUrl} alt={movie.nameRU} className='card__image' />
        </a>
        {isSavedMoviePage ? (
          <button className='card__delete-button card__save-button' onClick={handleDelete}>
          </button>
        ) : (
          <button
            className={`card__save-button ${isSaved ? 'card__save-button_saved' : ''}`}
            onClick={handleSave}
          >
            {isSaved ? '' : 'Сохранить'}
          </button>
        )}
      </div>
      <div className='card__details'>
        <span className='card__title'>{movie.nameRU}</span>
        <span className='card__duration'>{formatDuration(movie.duration)}</span>
      </div>
    </div>
  );
}

export default MovieCard;