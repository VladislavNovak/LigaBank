import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link className="logo" to="#" aria-label="Домашняя страница">
        <svg className="icon-logo" width="30" height="27" fill="none"><use xlinkHref="./sprite/sprite.svg#icon-logo"></use></svg>
        <span>ЛИГА Банк</span>
      </Link>
      <nav className="header__navigator">
        <ul className="header__navigator-list">
          <li className="header__navigator-item"><Link to="#">Услуги</Link></li>
          <li className="header__navigator-item"><Link to="#">Рассчитать кредит</Link></li>
          <li className="header__navigator-item"><Link to="#">Конвертер валют</Link></li>
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
