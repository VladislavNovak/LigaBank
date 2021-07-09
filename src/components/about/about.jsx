import React from 'react';
// import React, {useState} from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faAddressBook, faAt, faBars, faCat, faCodeBranch, faCog, faHome, faTimes, faUserPlus} from '@fortawesome/free-solid-svg-icons';
// import {faEdit} from '@fortawesome/free-regular-svg-icons';

const About = () => {
  // const [activeMenu, setActiveMenu] = useState(false);

  // const handleMenuClick = () => {
  //   setActiveMenu((prevState) => !prevState);
  // };

  return (
    <div className="about">
      <div className="about__container">
        <div className="about__title">
          <h2 className="about__text-first">Novaldix</h2>
          <h2 className="about__text-second">Novaldix</h2>
          {/* <h2 className="about__text-first">Animated</h2>
          <h2 className="about__text-second">Animated</h2> */}
        </div>
        <div className="about__portrait">
          <img
            className="about__portrait-photo"
            src="https://sun9-3.userapi.com/impf/c6094/v6094857/1272/8uaAeZ933ns.jpg?size=2560x1920&quality=96&sign=8806b17960483f32924ded8ab20bbef8&type=album" alt="" />
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
