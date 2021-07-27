import React from 'react';
import {Link} from 'react-router-dom';
import {Circles} from '..';

import imgFirst from '../../img/pexels-sevenstorm-juhaszimrus-443383.jpg';
import imgSecond from '../../img/pexels-pixabay-270480.jpg';
import imgThird from '../../img/pexels-jonas-ferlin-1963557.jpg';
import imgFourth from '../../img/pexels-mantas-sinkevičius-1106476.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <h1 className="visually-hidden">Причины обратиться в Лига Банк:</h1>

      <ul className="cards">
        <li className="cards__item">
          <img className="cards__item-img" src={imgFirst} alt="" />
          {/* <Link className="cards__item-redirect" to="#">View location</Link> */}
          <Link className="cards__item-redirect" to="#">
            <h3 className="cards__item-title">Аccuracy</h3>
            <p className="cards__item-text">`Tomorrow starts now`</p>
          </Link>
        </li>
        <li className="cards__item">
          <img className="cards__item-img" src={imgSecond} alt="" />
          <Link className="cards__item-redirect" to="#">
            <h3 className="cards__item-title">Solid</h3>
            <p className="cards__item-text">`Open an account for success`</p>
          </Link>
        </li>
        <li className="cards__item">
          <img className="cards__item-img" src={imgThird} alt="" />
          <Link className="cards__item-redirect" to="#">
            <h3 className="cards__item-title">Durable</h3>
            <p className="cards__item-text">`Our experience works for you`</p>
          </Link>
        </li>
        <li className="cards__item">
          <img className="cards__item-img" src={imgFourth} alt="" />
          <Link className="cards__item-redirect" to="#">
            <h3 className="cards__item-title">Trusty</h3>
            <p className="cards__item-text">`Feel the future`</p>
          </Link>
        </li>
      </ul>

      <Circles></Circles>
    </section>
  );
};

export default Banner;
