import React from 'react';

const History = ({history}) => {
  return (
    <section className="history">
      <h2 className="history__title">История конвертации</h2>
      <ul className="history__list">
        {
          history.map(({currentDate, firstCash, firstType, secondCash, secondType}) => (
            <li key={`${currentDate}-${firstCash}-${firstType}-${secondCash}-${secondType}`}
              className="history__item">
              <span className="history__date">{currentDate}</span>
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
}

export default History;
