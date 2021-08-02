import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {About, Logo} from '..';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="ocean">
        <div className="ocean__wave"></div>
        <div className="ocean__wave"></div>
      </div>
      <div className="footer__core">
        <div className="footer__target">
          <Logo />
          <p className="footer__location">James Kerry, 438 Dark Spurt, San Francisco, CA 94528, USA</p>
        </div>
        <div className="footer__media">
          <Link to="#"
            className="footer__media-icon"
            title="Найдите нас на сайте Фейсбук">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link to="#"
            className="footer__media-icon"
            title="Найдите нас на сайте Фейсбук">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="#"
            className="footer__media-icon"
            title="Найдите нас на сайте Фейсбук">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="#"
            className="footer__media-icon"
            title="Найдите нас на сайте Фейсбук">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
          <Link to="#"
            className="footer__media-icon"
            title="Найдите нас на сайте Фейсбук">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
      </div>

      <About />
    </footer>
  );
};

export default Footer;
