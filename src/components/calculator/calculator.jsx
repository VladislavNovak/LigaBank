import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {scroller} from 'react-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons';
import {faChartLine, faWindowClose} from '@fortawesome/free-solid-svg-icons';
import {History, DatePickerCustom, Organizer, RechartBar} from '..';
import {PATTERN, money} from '../../js/constants';
import {getCurrencies, rates} from '../../services/requests';

const Calculator = () => {
  const resetState = (date = (new Date())) => ({
    [money.cash.FIRST]: 0,
    [money.type.FIRST]: `USD`,
    [money.cash.SECOND]: 0,
    [money.type.SECOND]: `RUB`,
    [money.selectedDate]: date,
    status: false
  });

  useEffect(getCurrencies, []);

  const [currentAction, setCurrentAction] = useState(resetState());
  const [direction, setDirection] = useState(`arrows`);
  const [history, setHistory] = useState([]);
  const [isCurrentActionValid, setCurrentActionValid] = useState(true);
  const [isInputFocusStatus, setInputFocusStatus] = useState(false);

  const handleLabelFocus = () => {
    setInputFocusStatus(true);
  };

  const handleBlurInput = ({target}) => {
    if (PATTERN.exec(target.value)) {
      target.value = parseFloat(target.value.replace(/,/g, `.`));
    }

    if (!currentAction[money.cash.FIRST] || !currentAction[money.cash.SECOND]) {
      setInputFocusStatus(false);
    }
  };

  const convertCash = (inputName, value, otherCash, type, otherType) => {
    setCurrentActionValid(true);
    const cash = Number(value);
    const selfFactor = (rates[currentAction[type]] ? rates[currentAction[type]].Value : 1);
    const otherFactor = (rates[currentAction[otherType]] ? rates[currentAction[otherType]].Value : 1);
    const rur = cash / otherFactor;
    const converted = Math.floor(rur * selfFactor * 100) / 100;

    setCurrentAction({...currentAction, [`${inputName}`]: cash, [`${otherCash}`]: converted, status: false});
  };

  const changeCashByType = (selectName, value, cash) => {
    setCurrentActionValid(true);
    const prevFactor = (rates[currentAction[selectName]] ? rates[currentAction[selectName]].Value : 1);
    const nextFactor = (rates[value] ? rates[value].Value : 1);
    const rur = currentAction[cash] / nextFactor;
    const converted = Math.floor(rur * prevFactor * 100) / 100;

    setCurrentAction({...currentAction, [`${selectName}`]: value, [`${cash}`]: converted, status: false});
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

  const handleClickBackspace = () => {
    const prevHistory = [...history];
    if (prevHistory.length) {
      prevHistory.pop();
    }

    setHistory(prevHistory);
  };

  const handleClickReset = () => {
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
    if (prevHistory.length > 12) {
      prevHistory.pop();
    }

    setHistory(prevHistory);

    scroller.scrollTo(`Calculator`, {
      duration: 800,
      delay: 0,
      smooth: true,
      offset: -30
    });
  };

  const handleClear = (evt) => {
    evt.preventDefault();
    setCurrentAction(resetState());
    setInputFocusStatus(false);
  };

  const onListItemClick = ({id, status}) => {
    const prevHistory = [...history];
    prevHistory[id].status = status;
    setHistory(prevHistory);
  };

  return (
    <section id="Calculator" className="calculator">
      <h2 className="visually-hidden">Calculator</h2>
      <div className="calculator__left-side">
        <form className="calculator__form" onSubmit={handleSubmit}>
          <h3 className="calculator__form-title">Currency Calculator</h3>
          <div className="calculator__form-line">
            <Organizer
              legend={`I have the amount`}
              classElement={`organazer__cash`}
              isCurrentActionValid={isCurrentActionValid}
              cashName={money.cash.FIRST}
              cashValue={currentAction[money.cash.FIRST]}
              handleAction={handleAction}
              handleLabelFocus={handleLabelFocus}
              handleBlurInput={handleBlurInput}
              typeName={money.type.FIRST}
              typeValue={currentAction[money.type.FIRST]}
              isInputFocusStatus={isInputFocusStatus} />

            <FontAwesomeIcon className={direction} icon={faArrowAltCircleRight} />

            <Organizer
              legend={`I want to buy`}
              classElement={`organazer__exchanged`}
              isCurrentActionValid={isCurrentActionValid}
              cashName={money.cash.SECOND}
              cashValue={currentAction[money.cash.SECOND]}
              handleAction={handleAction}
              handleLabelFocus={handleLabelFocus}
              handleBlurInput={handleBlurInput}
              typeName={money.type.SECOND}
              typeValue={currentAction[money.type.SECOND]}
              isInputFocusStatus={isInputFocusStatus} />
          </div>
          <div className="calculator__form-line">
            <DatePickerCustom
              selectedDate={currentAction[money.selectedDate]}
              handleAction={handleAction} />

            <button className="calculator__submit" type="submit">
              <span>Add</span>
              <FontAwesomeIcon icon={faChartLine} className="calculator__submit-icon" />
            </button>
          </div>
          <button
            onClick={handleClear}
            className="calculator__clear">
            <FontAwesomeIcon icon={faWindowClose} className="calculator__clear-icon" />
          </button>
        </form>

        <RechartBar history={history} />
      </div>

      <History
        history={history}
        onClickBackspace={handleClickBackspace}
        onClickReset={handleClickReset}
        onListItemClick={onListItemClick} />

    </section>
  );
};

export default Calculator;
