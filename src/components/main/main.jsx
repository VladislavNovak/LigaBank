import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import {History, HistoryEmpty, CustomDatePicker, Organizer} from '..';
// import {History, HistoryEmpty, CustomDatePicker, Organizer, Slider} from '..';
import {PATTERN, money} from '../../js/constants';
import {getCurrencies, rates} from '../../services/requests';

const Main = () => {
  const resetState = (date = (new Date())) => ({
    [money.cash.FIRST]: 0,
    [money.type.FIRST]: `USD`,
    [money.cash.SECOND]: 0,
    [money.type.SECOND]: `RUB`,
    [money.selectedDate]: date
  });

  useEffect(getCurrencies, []);

  const [currentAction, setCurrentAction] = useState(resetState());

  const [history, setHistory] = useState([]);

  const [isCurrentActionValid, setCurrentActionValid] = useState(true);

  const handleBlurInput = ({target}) => {
    if (PATTERN.exec(target.value)) {
      target.value = parseFloat(target.value.replace(/,/g, `.`));
    }
  };

  const convertCash = (inputName, value, otherCash, type, otherType) => {
    setCurrentActionValid(true);
    const cash = Number(value);
    const selfFactor = (rates[currentAction[type]] ? rates[currentAction[type]].Value : 1);
    const otherFactor = (rates[currentAction[otherType]] ? rates[currentAction[otherType]].Value : 1);
    const rur = cash / otherFactor;
    const converted = Math.floor(rur * selfFactor * 100) / 100;

    setCurrentAction({...currentAction, [`${inputName}`]: cash, [`${otherCash}`]: converted});
  };

  const changeCashByType = (selectName, value, cash) => {
    setCurrentActionValid(true);
    const prevFactor = (rates[currentAction[selectName]] ? rates[currentAction[selectName]].Value : 1);
    const nextFactor = (rates[value] ? rates[value].Value : 1);
    const rur = currentAction[cash] / nextFactor;
    const converted = Math.floor(rur * prevFactor * 100) / 100;

    setCurrentAction({...currentAction, [`${selectName}`]: value, [`${cash}`]: converted});
  };

  const changeCashByDate = (date) => {
    getCurrencies(`https://www.cbr-xml-daily.ru/archive/${dayjs(date).format(`YYYY/MM/DD`)}/daily_json.js`);
    setCurrentActionValid(true);

    setCurrentAction(resetState(date));
  };

  const handleAction = ({name, value}) => {
    switch (name) {
      case money.cash.FIRST:
        convertCash(name, value, money.cash.SECOND, money.type.FIRST, money.type.SECOND);
        break;
      case money.cash.SECOND:
        convertCash(name, value, money.cash.FIRST, money.type.SECOND, money.type.FIRST);
        break;
      case money.type.FIRST:
        changeCashByType(name, value, money.cash.FIRST);
        break;
      case money.type.SECOND:
        changeCashByType(name, value, money.cash.SECOND);
        break;
      case money.selectedDate:
        changeCashByDate(value);
        break;

      default:
        break;
    }
  };

  const handleCleareHistory = () => {
    setHistory([]);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isEmptyValues = !currentAction[money.cash.FIRST] && !currentAction[money.cash.SECOND];
    const isNotChangedValues = currentAction === history[0];
    const isEqualValues = currentAction[money.cash.FIRST] === currentAction[money.cash.SECOND];

    if (isEmptyValues || isNotChangedValues || isEqualValues) {
      setCurrentActionValid(false);
      return;
    }

    const prevHistory = [...history];
    prevHistory.unshift(currentAction);
    if (prevHistory.length > 10) {
      prevHistory.pop();
    }

    setHistory(prevHistory);
  };

  return (
    <main>
      <section className="banner">
        <h1 className="visually-hidden">Причины обратиться в Лига Банк:</h1>
        <div className="banner__loan">
          <h2 className="banner__title">LIGA bank</h2>
          <p className="banner__propose">loans for any occasion</p>
          <Link className="banner__redirect" to="#">Calculate a Loan</Link>
        </div>
        <div className="banner__cards"></div>
      </section>

      {/* <Slider></Slider> */}

      <section
        id="Converter"
        onSubmit={handleSubmit}
        className="converter">
        <h2 className="converter__title">Currency Converter</h2>

        <form className="sums">
          <div className="sums__layout">
            <Organizer
              legend={`I have the amount`}
              classElement={`organazer__cash`}
              isCurrentActionValid={isCurrentActionValid}
              cashName={money.cash.FIRST}
              cashValue={currentAction[money.cash.FIRST]}
              handleAction={handleAction}
              handleBlurInput={handleBlurInput}
              typeName={money.type.FIRST}
              typeValue={currentAction[money.type.FIRST]} />

            <div className="arrows">
              <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="prev" transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
                  <polygon className="arrows__arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                  <polygon className="arrows__arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                  <path d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
                </g>
              </svg>

              <svg width="18px" height="17px" viewBox="-1 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g>
                  <polygon className="arrows__arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                  <polygon className="arrows__arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                  <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
                </g>
              </svg>
            </div>

            <Organizer
              legend={`I want to buy`}
              classElement={`organazer__exchanged`}
              isCurrentActionValid={isCurrentActionValid}
              cashName={money.cash.SECOND}
              cashValue={currentAction[money.cash.SECOND]}
              handleAction={handleAction}
              handleBlurInput={handleBlurInput}
              typeName={money.type.SECOND}
              typeValue={currentAction[money.type.SECOND]} />
          </div>
          <div className="sums__layout">
            <CustomDatePicker
              selectedDate={currentAction[money.selectedDate]}
              handleAction={handleAction} />

            <button className="sums__submit" type="submit">Сохранить результат</button>
          </div>
        </form>

        {history.length ? <History history={history} onClickButtonReset={handleCleareHistory} /> : <HistoryEmpty />}
      </section>
    </main>
  );
};

export default Main;
