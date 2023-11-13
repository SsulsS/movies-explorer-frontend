import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import cards from '../../utils/Movies';

function Movies() {
  return (
    <main>
    <div className="movies">
      <SearchForm />
      <MoviesCardList 
      cards={cards} 
      buttonMore={true} />
    </div>
    </main>
  );
}

export default Movies;
