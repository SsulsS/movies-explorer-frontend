import './SearchForm.css';
import { useState } from 'react';
import searchIcon from '../../images/search.svg';

function SearchForm({ onSearch, isChecked, setChecked, initialValue, onInputChange }){
  const [inputSearch, setInputSearch] = useState(initialValue || '');
  const [error, setError] = useState(null);

  function handleInputChange(evt) {
    setInputSearch(evt.target.value);
    onInputChange && onInputChange(evt.target.value);
  }

  function handleSubmit(evt) {  
    evt.preventDefault();
    if (!inputSearch.trim()) {
      setError('Нужно ввести ключевое слово');
      return;
   }
   setError(error);
   onSearch(inputSearch);
};

  return (
    <div className='search'>
         <div className='search__container'>
            <img src={searchIcon} alt='Лупа' className='search__icon' />
            <form className='search__form' onSubmit={handleSubmit}>
               <input type='text' placeholder='Фильм' className='search__input' value={inputSearch} onChange={handleInputChange}/>
               <button type='submit' className='search__button'>Найти</button>
            </form>
            <div className='search__checkbox'>
              <input id='shortFilmToggle' type='checkbox' checked={isChecked} onChange={() => setChecked(!isChecked)}/>
              <label htmlFor='shortFilmToggle' className='search__checkbox-title'> Короткометражки </label>
            </div>
         </div>
         {error && <p className='search__error'>{error}</p>}
      </div>
  );
};

export default SearchForm;