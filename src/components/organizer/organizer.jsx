import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoins, faShoppingBasket, faSortDown} from '@fortawesome/free-solid-svg-icons';

import {currencies} from '../../js/constants';

const Organizer = ({legend, classElement, isCurrentActionValid, cashName, cashValue, handleAction, handleBlurInput, typeName, typeValue, handleLabelFocus, isInputFocusStatus}) => {
  const getLabel = (title) => {
    let label;

    switch (title) {
      case `I have the amount`:
        label = isInputFocusStatus ? <FontAwesomeIcon icon={faCoins} /> : title;
        break;
      case `I want to buy`:
        label = isInputFocusStatus ? <FontAwesomeIcon icon={faShoppingBasket} /> : title;
        break;
      default:
        break;
    }

    return label;
  };

  return (
    <div className="organizer">
      <label
        htmlFor={classElement}
        className={`organizer__label ${isInputFocusStatus && `organizer__label--active`}`}>
        {getLabel(legend)}
      </label>
      <input
        type="number"
        id={classElement}
        className={`${classElement} organizer__input ${!isCurrentActionValid && `organizer__input--error`}`}
        min="0"
        step="any"
        name={cashName}
        aria-label="Введите сумму, которую необходимо поменять"
        title="Валюта"
        value={+cashValue || ``}
        onInput={({target}) => handleAction(target)}
        onFocus={handleLabelFocus}
        onBlur={handleBlurInput}
        required />
      <div className="organizer__select">
        <FontAwesomeIcon icon={faSortDown} className="organizer__select-icon" />
        <select
          className="organizer__select-core"
          name={typeName}
          value={typeValue}
          onChange={({target}) => handleAction(target)} >
          {Object.entries(currencies).map(([name, value]) => (
            <option key={name} value={name}>{value}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

Organizer.propTypes = {
  legend: PropTypes.string.isRequired,
  classElement: PropTypes.string.isRequired,
  isCurrentActionValid: PropTypes.bool.isRequired,
  cashName: PropTypes.string.isRequired,
  cashValue: PropTypes.number.isRequired,
  typeName: PropTypes.string.isRequired,
  typeValue: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  handleBlurInput: PropTypes.func.isRequired,
  handleLabelFocus: PropTypes.func.isRequired,
  isInputFocusStatus: PropTypes.bool.isRequired,
};

export default Organizer;
