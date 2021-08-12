import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVideo} from '@fortawesome/free-solid-svg-icons';

import Mitsubishi from '../../img/pexels-ryutaro-tsukata-5220031.jpg';

const Branches = () => {

  return (
    <section className="branches">
      <h1 className="visually-hidden">Location</h1>

      <div className="branch">
        <div className="branch__side">
          <h2 className="branch__side-caption">Tokyo</h2>
          <div className="branch__side-video"></div>
        </div>
        <div className="branch__scrolllist">
          <ul className="branch__scrolllist-scrollhidden">
            <li className="branch__scrolllist-item">
              <p className="branch__scrolllist-item-title">Mitsubishi UFJ</p>
              <img className="branch__scrolllist-item-photo" src={Mitsubishi} alt="" />
              <div className="branch__scrolllist-item-bottomline">
                <button className="branch__scrolllist-item-view"><FontAwesomeIcon icon={faVideo} /></button>
                <p className="branch__scrolllist-item-location">James Kerry, 438 Dark Spurt, San Francisco, CA 94528, USA</p>
              </div>
            </li>
            <li className="branch__scrolllist-item">
              <p className="branch__scrolllist-item-title">Mitsubishi UFJ</p>
              <img className="branch__scrolllist-item-photo" src={Mitsubishi} alt="" />
              <div className="branch__scrolllist-item-bottomline">
                <button className="branch__scrolllist-item-view"><FontAwesomeIcon icon={faVideo} /></button>
                <p className="branch__scrolllist-item-location">James Kerry, 438 Dark Spurt, San Francisco, CA 94528, USA</p>
              </div>
            </li>

            <li className="branch__scrolllist-item">Norinchukin Bank</li>
            <li className="branch__scrolllist-item">Yamaguchi Financial Group</li>
            <li className="branch__scrolllist-item">77 Bank</li>
            <li className="branch__scrolllist-item">Tokyo TY Financial Group</li>
            <li className="branch__scrolllist-item">Tokyo TY Financial Group</li>
            <li className="branch__scrolllist-item">Tokyo TY Financial Group</li>
            <li className="branch__scrolllist-item">Tokyo TY Financial Group</li>
            <li className="branch__scrolllist-item">Tokyo TY Financial Group</li>
            <li className="branch__scrolllist-item">Tokyo TY Financial Group</li>
            <li className="branch__scrolllist-item">Tokyo TY Financial Group</li>
            <li className="branch__scrolllist-item">Tokyo TY Financial Group</li>
          </ul>
        </div>

        <div className="branch__map">
          <section className="map__inner" id="map" />
        </div>
      </div>
    </section>
  );
};

export default Branches;
