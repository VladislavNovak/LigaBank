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
          <Link className="banner__redirect" to="#">Рассчитать кредит</Link>
        </div>
        <div className="banner__cards"></div>
      </section>

      {/* <Slider></Slider> */}

      <section
        id="Converter"
        onSubmit={handleSubmit}
        className="converter">
        <h2 className="converter__title">Конвертер валют</h2>

        <form className="sums">
          <div className="sums__layout">
            <Organizer
              legend={`У меня есть`}
              classElement={`organazer__cash`}
              isCurrentActionValid={isCurrentActionValid}
              cashName={money.cash.FIRST}
              cashValue={currentAction[money.cash.FIRST]}
              handleAction={handleAction}
              handleBlurInput={handleBlurInput}
              typeName={money.type.FIRST}
              typeValue={currentAction[money.type.FIRST]} />

            <div className="sums__arrows">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                className="arrows" width="80" height="55" viewBox="0 0 430 430" xmlSpace="preserve">
                <g>
                  <path className="sums__arrows-0" d="M387.1,138.6H42.9c-3.3,0-6-2.7-6-6s2.7-6,6-6h344.2c3.3,0,6,2.7,6,6S390.4,138.6,387.1,138.6z"/>
                  <path className="sums__arrows-0" d="M387.1,138.6c-1.5,0-3.1-0.6-4.2-1.8l-53.4-53.4c-2.3-2.3-2.3-6.1,0-8.5c2.3-2.3,6.1-2.3,8.5,0l53.4,53.4
                    c2.3,2.3,2.3,6.1,0,8.5C390.2,138,388.6,138.6,387.1,138.6z"/>
                  <path className="sums__arrows-0" d="M333.7,192c-1.5,0-3.1-0.6-4.2-1.8c-2.3-2.3-2.3-6.1,0-8.5l53.4-53.4c2.3-2.3,6.1-2.3,8.5,0
                    c2.3,2.3,2.3,6.1,0,8.5l-53.4,53.4C336.8,191.4,335.2,192,333.7,192z"/>
                </g>
                <g>
                  <path className="sums__arrows-1" d="M387.1,303.4H42.9c-3.3,0-6-2.7-6-6s2.7-6,6-6h344.2c3.3,0,6,2.7,6,6S390.4,303.4,387.1,303.4z"/>
                  <path className="sums__arrows-1" d="M42.9,303.4c-1.5,0-3.1-0.6-4.2-1.8c-2.3-2.3-2.3-6.1,0-8.5l53.4-53.4c2.3-2.3,6.1-2.3,8.5,0
                    c2.3,2.3,2.3,6.1,0,8.5l-53.4,53.4C46,302.9,44.5,303.4,42.9,303.4z"/>
                  <path className="sums__arrows-1" d="M96.3,356.8c-1.5,0-3.1-0.6-4.2-1.8l-53.4-53.4c-2.3-2.3-2.3-6.1,0-8.5c2.3-2.3,6.1-2.3,8.5,0l53.4,53.4
                    c2.3,2.3,2.3,6.1,0,8.5C99.4,356.3,97.9,356.8,96.3,356.8z"/>
                </g>
              </svg>
            </div>

            <Organizer
              legend={`Хочу приобрести`}
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
