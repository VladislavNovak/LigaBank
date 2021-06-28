import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import {scroller} from 'react-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons';
import {History, HistoryEmpty, CustomDatePicker, Organizer} from '..';
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
  const [direction, setDirection] = useState(`arrows`);

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
        setDirection(`arrows`);
        convertCash(name, value, money.cash.SECOND, money.type.FIRST, money.type.SECOND);
        break;
      case money.cash.SECOND:
        setDirection(`arrows arrows--left`);
        convertCash(name, value, money.cash.FIRST, money.type.SECOND, money.type.FIRST);
        break;
      case money.type.FIRST:
        setDirection(`arrows arrows--left`);
        changeCashByType(name, value, money.cash.FIRST);
        break;
      case money.type.SECOND:
        setDirection(`arrows`);
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

    scroller.scrollTo(`Converter`, {
      duration: 800,
      delay: 0,
      smooth: true,
      offset: -100
    });
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

            <FontAwesomeIcon className={direction} icon={faArrowAltCircleRight} />

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

            <button
              className="sums__submit"
              type="submit">Add in history</button>
          </div>
        </form>

        {history.length ? <History history={history} onClickButtonReset={handleCleareHistory} /> : <HistoryEmpty />}
      </section>
    </main>
  );
};

export default Main;
