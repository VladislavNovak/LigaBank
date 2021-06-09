import React from 'react';
import PropTypes from 'prop-types';
import {currencies} from '../../js/constants';

const Organizer = ({legend, classElement, isCurrentActionValid, cashName, cashValue, handleAction, handleBlurInput, typeName, typeValue}) => {
  return (
    <div className="organizer">
      <label htmlFor={classElement}>{legend}</label>
      <input
        type="number"
        className={isCurrentActionValid ? `organizer__input ${classElement}` : `organizer__input ${classElement} organizer__input--error`}
        min="0"
        step="any"
        name={cashName}
        aria-label="Введите сумму, которую необходимо поменять"
        title="Валюта"
        value={cashValue}
        onInput={({target}) => handleAction(target)}
        onBlur={handleBlurInput}
        required />
      <select
        className={`${classElement}-type`}
        name={typeName}
        value={typeValue}
        onChange={({target}) => handleAction(target)} >
        {currencies.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
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
};

export default Organizer;
