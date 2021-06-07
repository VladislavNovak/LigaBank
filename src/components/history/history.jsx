import React from 'react';
// import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import {money} from '../../js/constants';

const History = ({history}) => {
  return (
    <section className="history">
      <h2 className="history__title">История конвертации</h2>
      <ul className="history__list">
        {
          history.map(({currentDate, firstCash, firstType, secondCash, secondType}) => (
            <li key={`${currentDate}-${firstCash}-${firstType}-${secondCash}-${secondType}`}
              className="history__item">
              {/* <time className="history__date" dateTime={dayjs(currentDate).format(`YYYY-MM-DD`)}>{currentDate}</time> */}
              <time className="history__date" >{currentDate}</time>
              <span>{`${firstCash} ${firstType}`}</span>
              <span className="history__arrow">
                <svg width="41" height="18" fill="none"><use xlinkHref="./sprite/sprite.svg#icon-arrow"></use></svg>
              </span>
              <span>{`${secondCash} ${secondType}`}</span>
            </li>
          ))
        }
      </ul>
      <button className="history__reset">Очистить историю</button>
    </section>
  );
};

History.propTypes = ({
  history: PropTypes.arrayOf(PropTypes.shape({
    [money.CASH.FIRST]: PropTypes.number.isRequired,
    [money.TYPE.FIRST]: PropTypes.string.isRequired,
    [money.CASH.SECOND]: PropTypes.number.isRequired,
    [money.TYPE.SECOND]: PropTypes.string.isRequired,
    currentDate: PropTypes.string.isRequired,
  }))
});

export default History;
