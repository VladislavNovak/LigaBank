import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {History} from '..';
import {currencies, typeOfMoney, mocks} from '../../js/constants';

const Main = () => {
  let [cash, setCash] = useState(0);
  let [conv, setConv] = useState(0);

  const handleInputSum = (curValue, curClass) => {
    if (curClass === typeOfMoney.CASH && curClass === typeOfMoney.EXCHANGED) {
      setCash(curValue);
      setConv(curValue);
    }
  };

  return (
    <main>
      <section className="banner">
        <h1 className="visually-hidden">Причины обратиться в Лига Банк:</h1>
        <div className="banner__loan">
          <h2 className="banner__title">Лига Банк</h2>
          <p className="banner__propose">Кредиты на любой случай</p>
          <Link className="banner__redirect" to="#">Рассчитать кредит</Link>
        </div>
        <div className="banner__cards"></div>
      </section>

      <section className="converter">
        <h2 className="converter__title">Конвертер валют</h2>

        <form className="sums">
          <div className="sums__layout">       
          <div className="organizer">
            <label htmlFor="sums__cash">У меня есть</label>
            <input
              type="number"
              className="sums__input sums__cash"
              min="0"
              step="any"
              name="sums__cash"
              id="sums__cash"
              aria-label="Введите сумму, которую необходимо поменять"
              title="Валюта"
              value={conv}
              onInput={({target}) => handleInputSum(target.value, typeOfMoney.CASH)}
              required />
              <select
                className="sums__cash-type"
                onChange={({target}) => handleInputSum(target.value, typeOfMoney.CASH_TYPE)} >
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>            
          </div>
            <div className="sums__arrows">
              <svg width="80" height="55" fill="none"><use xlinkHref="./sprite/sprite.svg#icon-arrows" /></svg>
            </div>

            <div className="organizer">
            <label htmlFor="sums__exchanged">Хочу приобрести</label>
            <input
              type="number"
              className="sums__input sums__exchanged"
              min="0"
              step="any"
              name="sums__exchanged"
              id="sums__exchanged"
              aria-label="Введите сумму, которую необходимо поменять"
              title="Валюта"
              value={cash}
              onInput={({target}) => handleInputSum(target.value, typeOfMoney.EXCHANGED)}
              required />

              <select
                className="sums__exchanged-type"
                onChange={({target}) => handleInputSum(target.value, typeOfMoney.EXCHANGED_TYPE)} >
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>            
          </div>
          </div>
          <div className="sums__layout">
            <input className="sums__flatpickr" type="date" />
            <button className="sums__submit" type="submit">Сохранить результат</button>
          </div>
        </form>

        <History operations={mocks} />
      </section>
    </main>
  );
}

export default Main;