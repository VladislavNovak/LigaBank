import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDollarSign, faEuroSign, faHryvnia, faLiraSign, faPoundSign, faRubleSign, faYenSign} from '@fortawesome/free-solid-svg-icons';
import {faBtc} from '@fortawesome/free-brands-svg-icons';

const Circles = () => {
  return (
    <ul className="circles">
      <li><FontAwesomeIcon className="circles__sign" icon={faDollarSign} /></li>
      <li><FontAwesomeIcon className="circles__sign" icon={faEuroSign} /></li>
      <li><FontAwesomeIcon className="circles__sign" icon={faLiraSign} /></li>
      <li><FontAwesomeIcon className="circles__sign" icon={faPoundSign} /></li>
      <li><FontAwesomeIcon className="circles__sign" icon={faYenSign} /></li>
      <li><FontAwesomeIcon className="circles__sign" icon={faRubleSign} /></li>
      <li><FontAwesomeIcon className="circles__sign" icon={faHryvnia} /></li>
      <li><FontAwesomeIcon className="circles__sign" icon={faDollarSign} /></li>
      <li><FontAwesomeIcon className="circles__sign" icon={faBtc} /></li>
      <li><FontAwesomeIcon className="circles__sign" icon={faPoundSign} /></li>
      <li><FontAwesomeIcon className="circles__sign" icon={faEuroSign} /></li>
    </ul>
  );
};

export default Circles;
