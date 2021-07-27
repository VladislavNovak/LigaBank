// import React from 'react';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCss3Alt, faGithubSquare, faGitSquare, faHtml5, faJsSquare, faReact, faSass} from '@fortawesome/free-brands-svg-icons';
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
            <li className="about__list-item">
              <FontAwesomeIcon icon={faJsSquare} className="about__list-item-icon" /></li>
            <li className="about__list-item">
              <FontAwesomeIcon icon={faHtml5} className="about__list-item-icon" /></li>
            <li className="about__list-item">
              <FontAwesomeIcon icon={faCss3Alt} className="about__list-item-icon" /></li>
            <li className="about__list-item">
              <FontAwesomeIcon icon={faSass} className="about__list-item-icon" /></li>
            <li className="about__list-item">
              <FontAwesomeIcon icon={faReact} className="about__list-item-icon" /></li>
            <li className="about__list-item">
              <FontAwesomeIcon icon={faGitSquare} className="about__list-item-icon" /></li>
            <li className="about__list-item">
              <FontAwesomeIcon icon={faGithubSquare} className="about__list-item-icon" /></li>
          </ul>
          <p className="about__top-layer-text">`The only way to do great work is to love what you do`</p>
        </div>
        <div className={`about__portrait ${idPopupActive && `about__portrait--active`}`}>
          <img className="about__portrait-photo1"
            src="https://sun9-66.userapi.com/impg/sgC6pzDG3uJpeenw55L0mOJzieDmw14U8U1bgg/Nhvv8dLpamY.jpg?size=965x1208&quality=96&sign=2b477effc429b61735d6fcddd487f071&type=album" alt="" />
          <img className="about__portrait-photo2"
            src="https://sun9-66.userapi.com/impg/sgC6pzDG3uJpeenw55L0mOJzieDmw14U8U1bgg/Nhvv8dLpamY.jpg?size=965x1208&quality=96&sign=2b477effc429b61735d6fcddd487f071&type=album" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
