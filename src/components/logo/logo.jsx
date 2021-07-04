import React from 'react';
import {Link} from "react-scroll";

const Logo = () => {

  return (
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
  );
};

export default Logo;
