import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";
import {Link} from "react-scroll";

const Header = () => {

  let [isElementHidden, setElementHidden] = useState(false);
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {

    const currentScrollPos = window.pageYOffset;

    prevScrollpos = (prevScrollpos > currentScrollPos) ? (setElementHidden(false), currentScrollPos) : (setElementHidden(true), currentScrollPos);
  };

  return (
    <header className={`header ${isElementHidden && `header--hidden`}`}>
      <Link className="logo" to="#" aria-label="Домашняя страница">
        <svg className="icon-logo" width="30" height="27" fill="none"><use xlinkHref="./sprite/sprite.svg#icon-logo"></use></svg>
        <span>ЛИГА Банк</span>
      </Link>
      <nav className="header__navigator">
        <ul className="header__navigator-list">
          <li className="header__navigator-item">
            <Link to="#">Услуги</Link>
          </li>
          <li className="header__navigator-item">
            <Link to="#">Рассчитать кредит</Link>
          </li>
          <li className="header__navigator-item">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Converter">Конвертер валют</Link>
          </li>
          <li className="header__navigator-item"><Link to="#">Контакты</Link></li>
          <li className="header__navigator-item"><Link to="#">Задать вопрос</Link></li>
        </ul>
      </nav>
      <Link to="#" className="header__login">
        <svg className="icon-login" width="30" height="27" fill="none"><use xlinkHref="./sprite/sprite.svg#icon-login"></use></svg>
        <span>Войти в Интернет-банк</span>
      </Link>
    </header>
  );
};

export default Header;
