import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="project">
      <div className="about-project__content">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__items">
                <div className="about-project__item">
                    <h3 className="about-project__item-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__item-text">
                        Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about-project__item">
                    <h3 className="about-project__item-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__item-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="about-project__steps">
                <div className="about-project__step about-project__step_first">
                    <h4 className="about-project__step-title about-project__step-title_first">1 неделя</h4>
                    <p className="about-project__step-description">Back-end</p>
                </div>
                <div className="about-project__step">
                    <h4 className="about-project__step-title">4 недели</h4>
                    <p className="about-project__step-description">Front-end</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutProject;
