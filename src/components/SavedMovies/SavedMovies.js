import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import savedMovies from '../../utils/savedMovies';

const SavedMovies = () => {
  return (
    <main>
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList 
      cards={savedMovies} 
      buttonMore={false} />
    </div>
    </main>
  );
};

export default SavedMovies;
