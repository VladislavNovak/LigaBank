// import React from 'react';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faJsSquare} from '@fortawesome/free-brands-svg-icons';
// import {faAddressBook, faAt, faBars, faCat, faCodeBranch, faCog, faHome, faTimes, faUserPlus} from '@fortawesome/free-solid-svg-icons';
// import {faEdit} from '@fortawesome/free-regular-svg-icons';

const About = () => {
  // const [activeMenu, setActiveMenu] = useState(false);
  const [idPopupActive, setPopupActive] = useState(false);

  // const handleMenuClick = () => {
  //   setActiveMenu((prevState) => !prevState);
  // };

  const handlePopupActivate = (ars) => {
    setPopupActive(ars);
    // setPopupActive((prevState) => !prevState);
  };

  return (
    <div className="about">
      <div className="about__bottom">
        <p className="about__bottom-copyright">Copyright © 2021 All rights reserved</p>
        <ul className="about__bottom-list">
          <li className="about__bottom-item">
            <Link to="#">Privacy policy</Link>
          </li>
          <li className="about__bottom-item">
            <Link to="#">Terms & condition</Link>
          </li>
        </ul>
      </div>
      <div
        className="about__slider"
        onMouseEnter={() => handlePopupActivate(true)}
        onClick={() => handlePopupActivate(false)}>
        <div className="about__title">
          <h2 className="about__title-text1">Based on React</h2>
          <h2 className="about__title-text2">Based on React</h2>
        </div>
        <div className={`about__top-layer ${idPopupActive && `about__top-layer--active`}`}>
          <p>Novak Vlad <span>Front End Developer</span></p>
          <ul className="about__list">
            <li className="about__item">
              <FontAwesomeIcon icon={faJsSquare} className="about__item-icon" /></li>
          </ul>
        </div>
        <div className={`about__portrait ${idPopupActive && `about__portrait--active`}`}>
          <img className="about__portrait-photo1"
            src="https://sun9-66.userapi.com/impg/sgC6pzDG3uJpeenw55L0mOJzieDmw14U8U1bgg/Nhvv8dLpamY.jpg?size=965x1208&quality=96&sign=2b477effc429b61735d6fcddd487f071&type=album" alt="" />
          <img className="about__portrait-photo2"
            src="https://sun9-66.userapi.com/impg/sgC6pzDG3uJpeenw55L0mOJzieDmw14U8U1bgg/Nhvv8dLpamY.jpg?size=965x1208&quality=96&sign=2b477effc429b61735d6fcddd487f071&type=album" alt="" />
        </div>
      </div>

      {/* <div className={`about__menu ${activeMenu && `about__menu--disactive`}`}>
        <div
          className="about__menu-button"
          onClick={handleMenuClick}>
          <FontAwesomeIcon icon={activeMenu ? faBars : faTimes} />
        </div>
        <ul className="about__menu-list">
          <li className="about__menu-option">
            <div><FontAwesomeIcon icon={faHome} className="menu__icon" /></div>
            <div className="about__menu-title">Home</div>
          </li>
          <li className="about__menu-option">
            <div><FontAwesomeIcon icon={faCog} className="menu__icon" /></div>
            <div className="about__menu-title">Service</div>
          </li>
          <li className="about__menu-option">
            <div><FontAwesomeIcon icon={faCodeBranch} className="menu__icon" /></div>
            <div className="about__menu-title">Work</div>
          </li>
          <li className="about__menu-option">
            <div><FontAwesomeIcon icon={faAddressBook} className="menu__icon" /></div>
            <div className="about__menu-title">About</div>
          </li>
          <li className="about__menu-option">
            <div><FontAwesomeIcon icon={faAt} className="menu__icon" /></div>
            <div className="about__menu-title">Contact</div>
          </li>
          <li className="about__menu-option">
            <div><FontAwesomeIcon icon={faUserPlus} className="menu__icon" /></div>
            <div className="about__menu-title">Team</div>
          </li>
          <li className="about__menu-option">
            <div><FontAwesomeIcon icon={faCat} className="menu__icon" /></div>
            <div className="about__menu-title">Cat</div>
          </li>
          <li className="about__menu-option">
            <div><FontAwesomeIcon icon={faEdit} className="menu__icon" /></div>
            <div className="about__menu-title">Edit</div>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default About;
