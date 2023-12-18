import React from 'react';
import './Nav.css'

function Nav() {
    return (
        <section className="nav">
            <nav className="nav__items">
                <a href="#project" className="nav__item">О проекте</a>
                <a href="#techs" className="nav__item">Технологии</a>
                <a href="#profile" className="nav__item">Студент</a>
            </nav>
        </section>
    );
  };
  
  export default Nav;