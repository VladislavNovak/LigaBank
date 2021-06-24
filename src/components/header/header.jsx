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
          <li className="header__navigator-item">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="history">History</Link>
          </li>
          <li className="header__navigator-item"><Link to="#">Contacts</Link></li>
          <li className="header__navigator-item">
            <Link to="#">Services</Link>
          </li>
        </ul>
      </nav>
      <Link to="#" className="login">
        <svg height="512px" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg">
          <path d="m186.667969 64c0-35.285156 28.714843-64 64-64h213.332031c7.019531 0 13.589844 3.457031 17.578125 9.238281s4.863281 13.160157 2.347656 19.710938l-154.667969 405.332031c-3.136718 8.257812-11.070312 13.71875-19.925781 13.71875h-58.664062c-35.285157 0-64-28.714844-64-64zm0 0"
            fill="#2196f3"/>
          <path d="m314.667969 85.332031v384c0 14.722657 11.945312 26.667969 26.664062 26.667969 2.988281 0 5.761719-.425781 8.535157-1.28125l128-42.664062c10.453124-3.628907 18.132812-13.65625 18.132812-25.386719v-384c0-14.722657-11.945312-26.667969-26.667969-26.667969-2.984375 0-5.757812.425781-8.53125 1.28125l-128 42.664062c-10.453125 3.628907-18.132812 13.65625-18.132812 25.386719zm0 0"
            fill="#64b5f6"/>
          <path d="m298.667969 85.332031c0-18.238281 11.605469-34.515625 28.882812-40.488281l128.171875-42.730469c28.949219-8.898437 56.277344 12.457031 56.277344 40.554688v384c0 18.238281-11.605469 34.515625-28.886719 40.488281l-128.167969 42.730469c-4.714843 1.453125-9.046874 2.113281-13.613281 2.113281-23.53125 0-42.664062-19.136719-42.664062-42.667969m170.664062-437.332031c-1.34375 0-2.539062.171875-3.816406.574219l-127.636719 42.5625c-4.183594 1.429687-7.210937 5.652343-7.210937 10.195312v384c0 7.234375 7.570312 12.203125 14.484375 10.09375l127.636718-42.5625c4.179688-1.429687 7.210938-5.652343 7.210938-10.195312v-384c0-5.890625-4.777344-10.667969-10.667969-10.667969zm0 0"
            fill="#64b5f6"/>
          <path d="m218.667969 240h-202.667969c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h202.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
          <path d="m138.667969 320c-4.097657 0-8.191407-1.558594-11.308594-4.691406-6.25-6.253906-6.25-16.386719 0-22.636719l68.695313-68.691406-68.695313-68.671875c-6.25-6.253906-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l80 80c6.25 6.25 6.25 16.382813 0 22.636719l-80 80c-3.136719 3.132812-7.234375 4.691406-11.328125 4.691406zm0 0"/>
          <path d="m341.332031 512c-23.53125 0-42.664062-19.136719-42.664062-42.667969v-384c0-18.238281 11.605469-34.515625 28.882812-40.511719l128.171875-42.730468c28.671875-8.789063 56.277344 12.480468 56.277344 40.578125v384c0 18.21875-11.605469 34.472656-28.863281 40.488281l-128.214844 42.753906c-4.671875 1.449219-9 2.089844-13.589844 2.089844zm128-480c-1.386719 0-2.558593.171875-3.816406.554688l-127.636719 42.558593c-4.183594 1.453125-7.210937 5.675781-7.210937 10.21875v384c0 7.277344 7.890625 12.183594 14.484375 10.113281l127.636718-42.558593c4.160157-1.453125 7.210938-5.675781 7.210938-10.21875v-384c0-5.867188-4.777344-10.667969-10.667969-10.667969zm0 0"/>
          <path d="m186.667969 106.667969c-8.832031 0-16-7.167969-16-16v-32c0-32.363281 26.300781-58.667969 58.664062-58.667969h240c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-240c-14.699219 0-26.664062 11.96875-26.664062 26.667969v32c0 8.832031-7.167969 16-16 16zm0 0"/>
          <path d="m314.667969 448h-85.335938c-32.363281 0-58.664062-26.304688-58.664062-58.667969v-32c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v32c0 14.699219 11.964843 26.667969 26.664062 26.667969h85.335938c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
        </svg>
        <span className="login__text">Login</span>
      </Link>
    </header>
  );
};

export default Header;
