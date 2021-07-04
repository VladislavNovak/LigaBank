import React from 'react';
import DatePicker from 'react-datepicker';
import {money} from '../../js/constants';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import dayjs from 'dayjs';


const DatePickerCustom = ({selectedDate, handleAction}) => {
  return (
    <div className="datepicker">
      <label className="datepicker__label">
        <DatePicker
          className="datepicker__core"
          selected={selectedDate}
          dateFormat={`dd.MM.yyyy`}
          minDate={new Date(dayjs().subtract(20, `day`))}
          maxDate={new Date()}
          onChange={(date) => handleAction({value: date, name: money.selectedDate})} />
        <FontAwesomeIcon className="datepicker__core-icon" icon={faCalendarAlt} />
      </label>
    </div>
  );
};

DatePickerCustom.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default DatePickerCustom;
