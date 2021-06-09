import React from 'react';
import DatePicker from 'react-datepicker';
import {money} from '../../js/constants';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const CustomDatePicker = ({selectedDate, handleAction}) => {
  return (
    <div className="datepicker">
      <label>
        <DatePicker
          className="datepicker__core"
          selected={selectedDate}
          dateFormat={`dd.MM.yyyy`}
          minDate={new Date(dayjs().subtract(20, `day`))}
          maxDate={new Date()}
          onChange={(date) => handleAction({value: date, name: money.selectedDate})} />
        <svg className="datepicker__core-icon" width="41" height="44" fill="none"><use xlinkHref="./sprite/sprite.svg#icon-calendar" /></svg>
      </label>
    </div>
  );
};

CustomDatePicker.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default CustomDatePicker;
