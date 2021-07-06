import {faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Logo} from '..';

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
      <div className="footer__services">
        <ul className="footer__box">
          <li className="footer__box-title">Company</li>
          <li><Link to="#" className="footer__box-link">Home</Link></li>
          <li><Link to="#" className="footer__box-link">Contact us</Link></li>
          <li><Link to="#" className="footer__box-link">About us</Link></li>
          <li><Link to="#" className="footer__box-link">Get started</Link></li>
        </ul>
        <ul className="footer__box">
          <li className="footer__box-title">Services</li>
          <li><Link to="#" className="footer__box-link">App design</Link></li>
          <li><Link to="#" className="footer__box-link">Web design</Link></li>
          <li><Link to="#" className="footer__box-link">Logo design</Link></li>
          <li><Link to="#" className="footer__box-link">Banner design</Link></li>
        </ul>
        <ul className="footer__box">
          <li className="footer__box-title">Account</li>
          <li><Link to="#" className="footer__box-link">Profile</Link></li>
          <li><Link to="#" className="footer__box-link">My account</Link></li>
          <li><Link to="#" className="footer__box-link">Prefrences</Link></li>
          <li><Link to="#" className="footer__box-link">Purchase</Link></li>
        </ul>
        <ul className="footer__box">
          <li className="footer__box-title">Courses</li>
          <li><Link to="#" className="footer__box-link">HTML and CSS</Link></li>
          <li><Link to="#" className="footer__box-link">JavaScript</Link></li>
          <li><Link to="#" className="footer__box-link">Photography</Link></li>
          <li><Link to="#" className="footer__box-link">Photoshop</Link></li>
        </ul>
        <ul className="footer__box footer__box--right">
          <li className="footer__box-title">Subscribe</li>
          <li><input className="footer__box-input" type="text" placeholder="Enter your email" /></li>
          <li><input className="footer__box-input" type="button" value="Subscribe" /></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
