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
        <span className="logo-letter">L</span>
        <span className="logo-letter">I</span>
        <span className="logo-letter">G</span>
        <span className="logo-letter">A</span>
        <svg className="icon-logo" xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27">
          <path d="M16.75 1H13.8333L1 22.3415H4.79167L6.54167 19.2927L16.75 1Z" fill="none"/>
          <path d="M2.75 26H27.25L16.75 7.09756L15 10.1463L20.25 19.2927L22 22.3415H4.79167H1L2.75 26Z" fill="none"/>
          <path d="M22 22.3415L20.25 19.2927H9.75H6.54167L4.79167 22.3415H22Z" fill="none"/>
          <path d="M27.25 26L29 22.3415L16.75 1L6.54167 19.2927H9.75L15 10.1463L16.75 7.09756L27.25 26Z" fill="none"/>
          <path d="M15 10.1463L9.75 19.2927H20.25L15 10.1463Z" fill="none"/>
          <path d="M27.25 26H2.75L1 22.3415M27.25 26L29 22.3415L16.75 1M27.25 26L16.75 7.09756L15 10.1463M16.75 1H13.8333L1 22.3415M16.75 1L6.54167 19.2927M1 22.3415H4.79167M15 10.1463L9.75 19.2927M15 10.1463L20.25 19.2927M9.75 19.2927H20.25M9.75 19.2927H6.54167M20.25 19.2927L22 22.3415H4.79167M6.54167 19.2927L4.79167 22.3415" stroke="#F6F7FF"/>
        </svg>
        <span className="logo-letter">b</span>
        <span className="logo-letter">a</span>
        <span className="logo-letter">n</span>
        <span className="logo-letter">k</span>
      </Link>
      <nav className="header__navigator">
        <ul className="header__navigator-list">
          <li className="header__navigator-item">
            <Link to="#">Services</Link>
          </li>
          <li className="header__navigator-item">
            <Link to="#">Calculate a Loan</Link>
          </li>
          <li className="header__navigator-item">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Converter">Currency Converter</Link>
          </li>
          <li className="header__navigator-item"><Link to="#">Contacts</Link></li>
          <li className="header__navigator-item"><Link to="#">Ask a Question</Link></li>
        </ul>
      </nav>
      <Link to="#" className="header__login">
        <svg className="header__login-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="54" viewBox="0 0 30 27">
          <path d="M2.22222 14.3H4.44444V19.8H17.7778V2.2H4.44444V7.7H2.22222V1.1C2.22222 0.808262 2.33929 0.528472 2.54766 0.322183C2.75603 0.115892 3.03865 0 3.33333 0H18.8889C19.1836 0 19.4662 0.115892 19.6746 0.322183C19.8829 0.528472 20 0.808262 20 1.1V20.9C20 21.1917 19.8829 21.4715 19.6746 21.6778C19.4662 21.8841 19.1836 22 18.8889 22H3.33333C3.03865 22 2.75603 21.8841 2.54766 21.6778C2.33929 21.4715 2.22222 21.1917 2.22222 20.9V14.3ZM8.88889 9.9V6.6L14.4444 11L8.88889 15.4V12.1H0V9.9H8.88889Z" />
        </svg>
      </Link>
    </header>
  );
};

export default Header;
