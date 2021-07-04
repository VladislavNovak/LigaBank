import React from 'react';
import {Link} from 'react-router-dom';
import {Logo} from '..';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ocean">
        <div className="ocean__wave"></div>
        <div className="ocean__wave"></div>
      </div>
      <div className="footer__core">
        <div className="footer__target">
          <Logo />
          <p className="footer__location">James Kerry, 438 Dark Spurt, San Francisco, CA 94528, USA</p>
        </div>
        <nav>
          <ul className="footer__navigator">
            <li><Link to="#">Услуги</Link></li>
            <li><Link to="#">Рассчитать кредит</Link></li>
            <li><Link to="#">Контакты</Link></li>
            <li><Link to="#">Задать вопрос</Link></li>
          </ul>
        </nav>
        <div className="footer__phone">
          <p className="footer__icon">
            <svg width="10" height="16" fill="none"><use xlinkHref="./sprite/sprite.svg#icon-emergency" /></svg>
            <span>*0904</span>
          </p>
          <p className="footer__info">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
        </div>
        <div className="footer__mobile">
          <p className="footer__icon">
            <svg width="16" height="16" fill="none"><use xlinkHref="./sprite/sprite.svg#icon-phone" /></svg>
            <span>8 800 111 22 33</span>
          </p>
          <p className="footer__info">Бесплатный для всех городов России</p>
        </div>
        <ul className="footer__websites">
          <li>
            <Link to="#" className="footer__network" title="Найдите нас на сайте Фейсбук">
              <svg width="9" height="16"><use xlinkHref="./sprite/sprite.svg#icon-facebook" /></svg>
            </Link>
          </li>
          <li>
            <Link to="#" className="footer__network" title="Найдите нас на сайте Инстаграмм">
              <svg width="16" height="16"><use xlinkHref="./sprite/sprite.svg#icon-insta" /></svg>
            </Link>
          </li>
          <li>
            <Link to="#" className="footer__network" title="Найдите нас на сайте Твиттер">
              <svg width="16" height="16"><use xlinkHref="./sprite/sprite.svg#icon-twitter" /></svg>
            </Link>
          </li>
          <li>
            <Link to="#" className="footer__network" title="Найдите нас на сайте Ютьюб">
              <svg width="16" height="13"><use xlinkHref="./sprite/sprite.svg#icon-youtube" /></svg>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
