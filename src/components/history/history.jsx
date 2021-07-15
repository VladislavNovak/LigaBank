import React from 'react';
import PropTypes from 'prop-types';
import {HistoryItem, RechartPie, RechartBar} from '..';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackspace, faTrash} from '@fortawesome/free-solid-svg-icons';
import {faSave} from '@fortawesome/free-regular-svg-icons';
import {money} from '../../js/constants';

const History = ({history, handleAction, onClickBackspace, onClickReset, onListItemClick}) => {
  return (
    <section className={`history ${history.length && `history--add`}`}>
      {
        history.length
          ? (
            <React.Fragment>
              <h2 className="history__title">Сonversion history</h2>
              <div className="history__line">
                <ul className="history__list history__block-style">{
                  history.map(({selectedDate, firstCash, firstType, secondCash, secondType, status}, index) => (
                    <HistoryItem
                      key={`${selectedDate}-${firstCash}-${firstType}-${secondCash}-${secondType}`}
                      index={index}
                      status={status}
                      selectedDate={selectedDate}
                      firstCash={firstCash}
                      firstType={firstType}
                      secondCash={secondCash}
                      secondType={secondType}
                      onListItemClick={onListItemClick} />
                  ))
                }</ul>

                <div className="history__actions history__block-style">
                  <button
                    aria-label="backspace"
                    name="backspace"
                    onClick={onClickBackspace}
                    className="history__backspace"><FontAwesomeIcon icon={faBackspace} /></button>
                  <button
                    aria-label="save"
                    name="save"
                    onClick={({target}) => handleAction(target)}
                    className="history__save"><FontAwesomeIcon icon={faSave} /></button>
                  <button
                    aria-label="reset"
                    name="reset"
                    onClick={onClickReset}
                    className="history__reset"><FontAwesomeIcon icon={faTrash} /></button>
                </div>
              </div>
              <div className="history__line">
                <RechartBar history={history} />
                <RechartPie history={history} />
              </div>
            </React.Fragment>
          )
          : (
            <p className="history__notice">
              <span className="history__notice-one">To see the history of conversion enter the amount and save the result</span>
            </p>
          )
      }
    </section>
  );
};

History.propTypes = {
  handleAction: PropTypes.func,
  onClickBackspace: PropTypes.func,
  onClickReset: PropTypes.func,
  onListItemClick: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.shape({
    [money.cash.FIRST]: PropTypes.number.isRequired,
    [money.type.FIRST]: PropTypes.string.isRequired,
    [money.cash.SECOND]: PropTypes.number.isRequired,
    [money.type.SECOND]: PropTypes.string.isRequired,
    [money.selectedDate]: PropTypes.date,
  }))
};

export default History;
