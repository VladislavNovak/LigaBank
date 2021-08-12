import React from 'react';
import {Link} from 'react-router-dom';
import {Circles} from '..';

import {Banners} from '../../js/constants';

const Banner = () => {
  return (
    <section id="Banner" className="banners__wrapper">
      <h1 className="visually-hidden">Причины обратиться в Лига Банк:</h1>
      <ul className="banner-list">{
        Banners.map(({name, path, title, tagline}) => (
          <li
            key={name}
            className="banner">
            <div className="banner__back">
              <h3 className="banner__back-title">{title}</h3>
              <p className="banner__back-letter">{title.charAt(0)}</p>
              <p className="banner__back-tagline">{tagline}</p>
            </div>
            <Link className="banner__front" to="/map">
              <img className="banner__front-img" src={path} alt="" />
              <div className="banner__front-visit">
                <p>Visit</p>
                <p className="banner__front-city">{name}</p>
                <p>branches</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Circles></Circles>
    </section>
  );
};

export default Banner;
