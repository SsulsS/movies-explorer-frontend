import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolioolio">
      <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__items">
            <li className="portfolio__item">
                <a href="https://github.com/ssulss/" className="portfolio__item-text" target="_blank" rel="noreferrer">Статичный сайт</a>
            </li>
            <li className="portfolio__item">
                <a href="https://github.com/ssulss/" className="portfolio__item-text" target="_blank" rel="noreferrer">Адаптивный сайт</a>
            </li>
            <li className="portfolio__item">
                <a href="https://github.com/ssulss/" className="portfolio__item-text" target="_blank" rel="noreferrer">Одностраничное приложение</a>
            </li>
        </ul>
    </section>
  );
};

export default Portfolio;
