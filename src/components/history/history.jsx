import React from 'react';
import PropTypes from 'prop-types';
import {HistoryItem, RechartPie} from '..';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackspace, faTrash} from '@fortawesome/free-solid-svg-icons';
import {faSave} from '@fortawesome/free-regular-svg-icons';
import {money} from '../../js/constants';

const History = ({history, handleAction, onClickBackspace, onClickReset, onListItemClick}) => {
  return (
    <div className="history">
      <h3 className="history__title">Сonversion history</h3>
      <RechartPie history={history} />
      {
        history.length ? (
          <ul className="history__list">{
            history.map(({selectedDate, firstCash, firstType, secondCash, secondType, status}, index) => (
              <HistoryItem
                key={`${selectedDate}-${firstCash}-${firstType}-${secondCash}-${secondType}`}
                index={index}
                status={status}
                selectedDate={selectedDate}
                firstCash={firstCash}
                firstType={firstType}
                secondCash={secondCash}
                secondType={secondType}
                onListItemClick={onListItemClick} />))}</ul>)
          : (
            <div className="history__notice">
              <p className="history__notice-text">To see the history of conversion enter the amount and save the result</p>
            </div>)
      }
      <div className="history__buttons">
        <button
          aria-label="backspace"
          name="backspace"
          onClick={onClickBackspace}
          className="history__backspace"><FontAwesomeIcon icon={faBackspace} /></button>
        <button
          aria-label="save"
          name="save"
          onClick={({target}) => handleAction(target)}
          className="history__save"><FontAwesomeIcon icon={faSave} /></button>
        <button
          aria-label="reset"
          name="reset"
          onClick={onClickReset}
          className="history__reset"><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </div>
  );
};

History.propTypes = {
  handleAction: PropTypes.func,
  onClickBackspace: PropTypes.func,
  onClickReset: PropTypes.func,
  onListItemClick: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.shape({
    [money.cash.FIRST]: PropTypes.number.isRequired,
    [money.type.FIRST]: PropTypes.string.isRequired,
    [money.cash.SECOND]: PropTypes.number.isRequired,
    [money.type.SECOND]: PropTypes.string.isRequired,
    [money.selectedDate]: PropTypes.date,
  }))
};

export default History;
