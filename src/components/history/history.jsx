import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCcPaypal} from '@fortawesome/free-brands-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faSave} from '@fortawesome/free-regular-svg-icons';
import {Scrambler} from '..';
import {money} from '../../js/constants';

const History = ({history, onClickButtonReset}) => {
  return (
    <section className="history">
      <h2 className="history__title">Сonversion history</h2>
      <ul className="history__list">
        {
          history.map(({selectedDate, firstCash, firstType, secondCash, secondType}) => (
            <li
              key={`${selectedDate}-${firstCash}-${firstType}-${secondCash}-${secondType}`}
              className="history__item">

              <Scrambler text={dayjs(selectedDate).format(`DD.MM.YYYY`)} elClassName="history__date" />
              <div>
                <Scrambler text={`${firstCash} ${firstType}`} elClassName="history__span" />
                <span className="history__arrow">
                  <svg width="41" height="18" fill="none"><use xlinkHref="./sprite/sprite.svg#icon-arrow"></use></svg>
                </span>
                <Scrambler text={`${secondCash} ${secondType}`} elClassName="history__span" />
              </div>
            </li>
          ))
        }
      </ul>
      <div className="history__actions">
        <button
          aria-label="paypal"
          onClick={onClickButtonReset}
          className="history__paypal">{<FontAwesomeIcon icon={faCcPaypal} />}</button>
        <button
          aria-label="save"
          onClick={onClickButtonReset}
          className="history__save">{<FontAwesomeIcon icon={faSave} />}</button>
        <button
          aria-label="reset"
          onClick={onClickButtonReset}
          className="history__reset">{<FontAwesomeIcon icon={faTrash} />}</button>
      </div>
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
