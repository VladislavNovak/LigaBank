import React from 'react';
import {Link} from 'react-router-dom';

const Banner = () => {
  return (
    <section className="banner">
      <h1 className="visually-hidden">Причины обратиться в Лига Банк:</h1>
      <div className="banner__loan">
        <h2 className="banner__title">LIGA bank</h2>
        <p className="banner__propose">loans for any occasion</p>
        <Link className="banner__redirect" to="#">Calculate a Loan</Link>
      </div>
      <div className="banner__cards"></div>
    </section>
  );
};

export default Banner;
