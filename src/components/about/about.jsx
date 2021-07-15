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
          <h2 className="about__title-first">Based on React</h2>
          <h2 className="about__title-second">Based on React</h2>
        </div>
        <div className="about__portrait">
          <img
            className="about__portrait-photo"
            src="https://sun9-66.userapi.com/impg/sgC6pzDG3uJpeenw55L0mOJzieDmw14U8U1bgg/Nhvv8dLpamY.jpg?size=965x1208&quality=96&sign=2b477effc429b61735d6fcddd487f071&type=album" alt="" />
          <img
            className="about__portrait-photo2"
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
