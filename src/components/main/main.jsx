import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import {History} from '..';
import {PATTERN, money, rates} from '../../js/constants';

const Main = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [currentAction, setCurrentAction] = useState({
    [money.CASH.FIRST]: 0,
    [money.TYPE.FIRST]: `RUB`,
    [money.CASH.SECOND]: 0,
    [money.TYPE.SECOND]: `RUB`,
    currentDate: dayjs(startDate).format(`DD.MM.YYYY`)
  });

  const [history, setHistory] = useState([]);

  const [isErrorValidity, checkValidation] = useState(false);


  const handleBlurInput = ({target}) => {
    if (PATTERN.exec(target.value)) {
      target.value = parseFloat(target.value.replace(/,/g, `.`));
    }
  };

  const convertCash = (inputName, value, otherCash, type, otherType) => {
    checkValidation(false);
    const cash = Number(value);
    const selfFactor = (rates[currentAction[type]] ? rates[currentAction[type]].Value : 1);
    const otherFactor = (rates[currentAction[otherType]] ? rates[currentAction[otherType]].Value : 1);
    const rur = cash / otherFactor;
    const converted = Math.floor(rur * selfFactor * 100) / 100;

    setCurrentAction({...currentAction, [`${inputName}`]: cash, [`${otherCash}`]: converted, currentDate: dayjs(startDate).format(`DD.MM.YYYY`)});
  };

  const changeCashByType = (selectName, value, cash) => {
    checkValidation(false);
    const prevFactor = (rates[currentAction[selectName]] ? rates[currentAction[selectName]].Value : 1);
    const nextFactor = (rates[value] ? rates[value].Value : 1);
    const rur = currentAction[cash] / nextFactor;
    const converted = Math.floor(rur * prevFactor * 100) / 100;

    setCurrentAction({...currentAction, [`${selectName}`]: value, [`${cash}`]: converted, currentDate: dayjs(startDate).format(`DD.MM.YYYY`)});
  };

  const handleInputSum = ({name, value}) => {
    switch (name) {
      case money.CASH.FIRST:
        convertCash(name, value, money.CASH.SECOND, money.TYPE.FIRST, money.TYPE.SECOND);
        break;
      case money.CASH.SECOND:
        convertCash(name, value, money.CASH.FIRST, money.TYPE.SECOND, money.TYPE.FIRST);
        break;
      case money.TYPE.FIRST:
        changeCashByType(name, value, money.CASH.FIRST);
        break;
      case money.TYPE.SECOND:
        changeCashByType(name, value, money.CASH.SECOND);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isEmptyValues = !currentAction[money.CASH.FIRST] && !currentAction[money.CASH.SECOND];
    const isNotChangedValues = currentAction === history[history.length - 1];
    const isEqualValues = currentAction[money.CASH.FIRST] === currentAction[money.CASH.SECOND];

    if (isEmptyValues || isNotChangedValues || isEqualValues) {
      checkValidation(true);
      return;
    }

    const prevHistory = [...history];
    prevHistory.unshift(currentAction);
    if (prevHistory.length > 10) {
      prevHistory.pop();
    }

    setHistory(prevHistory);

    // eslint-disable-next-line no-console
    console.log(`history: `, history);
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

      <section
        onSubmit={handleSubmit}
        className="converter">
        <h2 className="converter__title">Конвертер валют</h2>

        <form className="sums">
          <div className="sums__layout">
            <div className="organizer">
              <label htmlFor="sums__cash">У меня есть</label>
              <input
                type="number"
                className={isErrorValidity ? `sums__input sums__cash sums__input--error` : `sums__input sums__cash`}
                min="0"
                step="any"
                name="firstCash"
                aria-label="Введите сумму, которую необходимо поменять"
                title="Валюта"
                value={currentAction[money.CASH.FIRST]}
                onInput={({target}) => handleInputSum(target)}
                onBlur={handleBlurInput}
                required />
              <select
                className="sums__cash-type"
                name="firstType"
                onChange={({target}) => handleInputSum(target)} >
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
                className={isErrorValidity ? `sums__input sums__exchanged sums__input--error` : `sums__input sums__exchanged`}
                min="0"
                step="any"
                name="secondCash"
                aria-label="Введите сумму, которую необходимо поменять"
                title="Валюта"
                value={currentAction[money.CASH.SECOND]}
                onInput={({target}) => handleInputSum(target)}
                required />
              <select
                className="sums__exchanged-type"
                name="secondType"
                onChange={({target}) => handleInputSum(target)} >
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>
          <div className="sums__layout">
            <div className="sums__datepicker-wrapper">
              <label>
                <DatePicker
                  className="sums__datepicker"
                  selected={startDate}
                  dateFormat={`dd.MM.yyyy`}
                  onChange={(date) => setStartDate(date)} />
                <svg className="sums__datepicker-icon" width="41" height="44" fill="none"><use xlinkHref="./sprite/sprite.svg#icon-calendar" /></svg>
              </label>
            </div>
            <button className="sums__submit" type="submit">Сохранить результат</button>
          </div>
        </form>

        <History history={history} />
      </section>
    </main>
  );
};

export default Main;
