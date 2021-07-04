import React from 'react';
import PropTypes from 'prop-types';
import {RechartCustom} from '..';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackspace, faTrash} from '@fortawesome/free-solid-svg-icons';
import {faSave} from '@fortawesome/free-regular-svg-icons';
import {money} from '../../js/constants';
import HistoryItem from '../history-item/history-item';

const History = ({history, handleAction, onClickBackspace, onClickReset}) => {
  return (
    <section className="history">
      <h2 className="history__title">Сonversion history</h2>
      <ul className="history__list">{
        history.map(({selectedDate, firstCash, firstType, secondCash, secondType}) => (
          <HistoryItem
            key={`${selectedDate}-${firstCash}-${firstType}-${secondCash}-${secondType}`}
            selectedDate={selectedDate}
            firstCash={firstCash}
            firstType={firstType}
            secondCash={secondCash}
            secondType={secondType} />
        ))
      }</ul>

      <RechartCustom history={history} />

      <div className="history__actions">
        <button
          aria-label="backspace"
          name="backspace"
          onClick={onClickBackspace}
          className="history__backspace">{<FontAwesomeIcon icon={faBackspace} />}</button>
        <button
          aria-label="save"
          name="save"
          onClick={({target}) => handleAction(target)}
          className="history__save">{<FontAwesomeIcon icon={faSave} />}</button>
        <button
          aria-label="reset"
          name="reset"
          onClick={onClickReset}
          className="history__reset">{<FontAwesomeIcon icon={faTrash} />}</button>
      </div>
    </section>
  );
};

History.propTypes = {
  handleAction: PropTypes.func,
  onClickBackspace: PropTypes.func,
  onClickReset: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.shape({
    [money.cash.FIRST]: PropTypes.number.isRequired,
    [money.type.FIRST]: PropTypes.string.isRequired,
    [money.cash.SECOND]: PropTypes.number.isRequired,
    [money.type.SECOND]: PropTypes.string.isRequired,
    [money.selectedDate]: PropTypes.date,
  }))
};

export default History;
