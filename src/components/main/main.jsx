import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import {History} from '..';
import {PATTERN, money} from '../../js/constants';
import {getCurrencies, rates} from '../../services/requests';

const Main = () => {
  const resetState = (date = (new Date())) => ({
    [money.cash.FIRST]: 0,
    [money.type.FIRST]: `RUB`,
    [money.cash.SECOND]: 0,
    [money.type.SECOND]: `RUB`,
    [money.selectedDate]: date
  });

  const [currentAction, setCurrentAction] = useState(resetState());

  const [history, setHistory] = useState([]);

  const [isValid, setValid] = useState(true);


  const handleBlurInput = ({target}) => {
    if (PATTERN.exec(target.value)) {
      target.value = parseFloat(target.value.replace(/,/g, `.`));
    }
  };

  const convertCash = (inputName, value, otherCash, type, otherType) => {
    setValid(true);
    const cash = Number(value);
    const selfFactor = (rates[currentAction[type]] ? rates[currentAction[type]].Value : 1);
    const otherFactor = (rates[currentAction[otherType]] ? rates[currentAction[otherType]].Value : 1);
    const rur = cash / otherFactor;
    const converted = Math.floor(rur * selfFactor * 100) / 100;

    setCurrentAction({...currentAction, [`${inputName}`]: cash, [`${otherCash}`]: converted});
  };

  const changeCashByType = (selectName, value, cash) => {
    setValid(true);
    const prevFactor = (rates[currentAction[selectName]] ? rates[currentAction[selectName]].Value : 1);
    const nextFactor = (rates[value] ? rates[value].Value : 1);
    const rur = currentAction[cash] / nextFactor;
    const converted = Math.floor(rur * prevFactor * 100) / 100;

    setCurrentAction({...currentAction, [`${selectName}`]: value, [`${cash}`]: converted});
  };

  const changeCashByDate = (date) => {
    getCurrencies(`https://www.cbr-xml-daily.ru/archive/${dayjs(date).format(`YYYY/MM/DD`)}/daily_json.js`);
    setValid(true);

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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isEmptyValues = !currentAction[money.cash.FIRST] && !currentAction[money.cash.SECOND];
    const isNotChangedValues = currentAction === history[history.length - 1];
    const isEqualValues = currentAction[money.cash.FIRST] === currentAction[money.cash.SECOND];

    if (isEmptyValues || isNotChangedValues || isEqualValues) {
      setValid(false);
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
                className={isValid ? `sums__input sums__cash` : `sums__input sums__cash sums__input--error`}
                min="0"
                step="any"
                name={money.cash.FIRST}
                aria-label="Введите сумму, которую необходимо поменять"
                title="Валюта"
                value={currentAction[money.cash.FIRST]}
                onInput={({target}) => handleAction(target)}
                onBlur={handleBlurInput}
                required />
              <select
                className="sums__cash-type"
                name={money.type.FIRST}
                value={currentAction[money.type.FIRST]}
                onChange={({target}) => handleAction(target)} >
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
                className={isValid ? `sums__input sums__exchanged` : `sums__input sums__exchanged sums__input--error`}
                min="0"
                step="any"
                name={money.cash.SECOND}
                aria-label="Введите сумму, которую необходимо поменять"
                title="Валюта"
                value={currentAction[money.cash.SECOND]}
                onInput={({target}) => handleAction(target)}
                required />
              <select
                className="sums__exchanged-type"
                name={money.type.SECOND}
                value={currentAction[money.type.SECOND]}
                onChange={({target}) => handleAction(target)} >
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>
          <div className="sums__layout">
            <div className="datepicker">
              <label>
                <DatePicker
                  className="datepicker__core"
                  selected={currentAction[money.selectedDate]}
                  dateFormat={`dd.MM.yyyy`}
                  minDate={new Date(dayjs().subtract(1, `month`))}
                  maxDate={new Date()}
                  onChange={(date) => handleAction({value: date, name: money.selectedDate})} />
                <svg className="datepicker__core-icon" width="41" height="44" fill="none"><use xlinkHref="./sprite/sprite.svg#icon-calendar" /></svg>
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
