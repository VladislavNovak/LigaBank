import React, {useState} from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {Scrambler} from '..';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink, faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import {faUncharted} from '@fortawesome/free-brands-svg-icons';

const HistoryItem = ({selectedDate, firstCash, firstType, secondCash, secondType}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleListitemClick = () => {
    setIsSelected((prevState) => !prevState);
  };

  return (
    <li
      key={`${selectedDate}-${firstCash}-${firstType}-${secondCash}-${secondType}`}
      onClick={handleListitemClick}
      className="history__item">
      <div className="history__sign">
        <FontAwesomeIcon
          className={`history__sign-icon ${isSelected && `history__sign--active`}`}
          icon={isSelected ? faLink : faUncharted} />
      </div>
      <div className={`history__field ${isSelected && `history__field--active`}`}>
        <p className="history__date">{dayjs(selectedDate).format(`DD.MM.YYYY`)}</p>
        <div className="history__second-line">
          <Scrambler text={`${firstCash} ${firstType}`} elClassName="history__span" />
          <FontAwesomeIcon icon={faLongArrowAltRight} className="history__arrow" />
          <Scrambler text={`${secondCash} ${secondType}`} elClassName="history__span" />
        </div>
      </div>
    </li>
  );
};

HistoryItem.propTypes = {
  firstCash: PropTypes.number.isRequired,
  firstType: PropTypes.string.isRequired,
  secondCash: PropTypes.number.isRequired,
  secondType: PropTypes.string.isRequired,
  selectedDate: PropTypes.object,
};

export default HistoryItem;
