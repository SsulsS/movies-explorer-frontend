import './SearchForm.css';
import { useEffect, useState } from 'react';

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
    <form className="search">
      <div className="search__container">
        <input className="search__input" placeholder="Фильм" type="text" value={inputSearch || ''} onChange={handleInputChange} required />
        <button type="submit" className="search__button" onClick={handleSubmit}>Найти</button>
        <div className="search__toggle">
        <p className="search__films">Короткометражки</p>
        <label className="search__tumbler">

          <input className="search__checkbox" type="checkbox" checked={isChecked} onChange={() => setChecked(!isChecked)} />
          
          <span className="search__slider" />
        </label>
      </div>
        
      </div>
      
    </form>
  );
};

export default SearchForm;
