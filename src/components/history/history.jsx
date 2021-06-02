import React from 'react';

const History = ({operations}) => {
  return (
    <section className="history">
      <h2 className="history__title">История конвертации</h2>
      <ul className="history__list">
        {
          operations.map(({currentDate, firstCash, firstCashType, secondCash, secondCashType}) => (
            <li key={`${currentDate}-${firstCash}-${firstCashType}-${secondCash}-${secondCashType}`}
              className="history__item">
              <span className="history__date">{currentDate}</span>
              <span>{`${firstCash} ${firstCashType}`}</span>
              <span className="history__arrow">
                <svg width="41" height="18" fill="none"><use xlinkHref="./sprite/sprite.svg#icon-arrow"></use></svg>
              </span>
              <span>{`${secondCash} ${secondCashType}`}</span>
            </li>
          ))
        }
      </ul>
      <button className="history__reset">Очистить историю</button>
    </section>
  );
}

export default History;
