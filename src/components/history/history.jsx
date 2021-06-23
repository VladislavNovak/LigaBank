import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {Scrambler} from '..';
import {money} from '../../js/constants';

const History = ({history, onClickButtonReset}) => {
  return (
    <section className="history">
      <h2 className="history__title">Сonversion history</h2>
      <ul className="history__list">
        {
          history.map(({selectedDate, firstCash, firstType, secondCash, secondType}) => (
            <li key={`${selectedDate}-${firstCash}-${firstType}-${secondCash}-${secondType}`}
              className="history__item">
              <Scrambler text={dayjs(selectedDate).format(`DD.MM.YYYY`)} />
              <Scrambler text={`${firstCash} ${firstType}`} />
              <span className="history__arrow">
                <svg width="41" height="18" fill="none"><use xlinkHref="./sprite/sprite.svg#icon-arrow"></use></svg>
              </span>
              <Scrambler text={`${secondCash} ${secondType}`} />
            </li>
          ))
        }
      </ul>
      <button
        onClick={onClickButtonReset}
        className="history__reset">Сlear the history</button>
    </section>
  );
};

History.propTypes = {
  onClickButtonReset: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.shape({
    [money.cash.FIRST]: PropTypes.number.isRequired,
    [money.type.FIRST]: PropTypes.string.isRequired,
    [money.cash.SECOND]: PropTypes.number.isRequired,
    [money.type.SECOND]: PropTypes.string.isRequired,
    [money.selectedDate]: PropTypes.date,
  }))
};

export default History;
