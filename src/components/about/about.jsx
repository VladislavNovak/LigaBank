import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressBook, faAt, faBars, faCat, faCodeBranch, faCog, faHome, faTimes, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-regular-svg-icons';

const About = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenuClick = () => {
    setActiveMenu((prevState) => !prevState);
  };

  return (
    <div className="about__container">
      <div className="about__top">
        <div className="about__page">
          <h1>About developer</h1>
          <p>You can select my work in the menu</p>
        </div>
      </div>

      <div className={`about__menu ${activeMenu && `about__menu--disactive`}`}>
        <button
          className="about__top-button"
          onClick={handleMenuClick}>
          <FontAwesomeIcon icon={activeMenu ? faBars : faTimes} />
        </button>
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
      </div>
    </div>
  );
};

export default About;
