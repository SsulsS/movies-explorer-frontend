import './PageNotFound.css';

function PageNotFound() {
  const handleGoBack = () => {
    window.history.go(-1);
  };

  return (
    <div className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button onClick={handleGoBack} className='not-found__link'>
         Назад
       </button>
    </div>
  );
};

export default PageNotFound;
