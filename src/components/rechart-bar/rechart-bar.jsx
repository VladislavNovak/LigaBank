import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {money, RechartsColor} from '../../js/constants';
import dayjs from 'dayjs';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const RechartBar = ({history}) => {
  const [dataForChart, setDataForChart] = useState([]);
  const [dimensionChart, setDimensionChart] = useState({});

  useEffect(() => {
    const days = [...new Set(history.map(({selectedDate}) => dayjs(selectedDate).format(`YYYY/MM/DD`)))];

    const rawArraws = days.reduce((total, day) => {
      total[day] = total[day] || [];
      const temp = history.filter(({selectedDate}) => dayjs(selectedDate).format(`YYYY/MM/DD`) === day);

      total[day] = temp.map(({firstType, firstCash, secondType, secondCash}) => {
        return {[firstType]: firstCash, [secondType]: secondCash};
      });
      return total;
    }, {});

    const preparedArray = Object.entries(rawArraws).reduce((total, [key, arr]) => {
      const temp = [];
      arr.forEach((item) => {
        for (let value in item) {
          if (temp.hasOwnProperty(value)) {
            temp[value] += item[value];
          } else {
            temp[value] = item[value];
          }
        }
      });

      total.push({...temp, date: key});
      return total;
    }, []);

    setDataForChart(preparedArray);

    setDimensionChart({width: 22 * (preparedArray.length + 1) - ((1 + (preparedArray.length + 1)) * (preparedArray.length + 1)), height: 100});
  }, [history]);

  return (
    <div className="rechart__bar">
      <h3 className="rechart__bar-title">Сomparison of spending</h3>
      {
        history.length ? (
          <ResponsiveContainer width={`${dimensionChart.width}%`} height={`${dimensionChart.height}%`} className="rechart__bar-chart">
            <BarChart
              width={300}
              height={300}
              data={dataForChart}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="USD" fill={RechartsColor.USD} />
              <Bar dataKey="GBP" fill={RechartsColor.GBP} />
              <Bar dataKey="EUR" fill={RechartsColor.EUR} />
            </BarChart>
          </ResponsiveContainer>)
          : (
            <div className="rechart__bar-notice">
              <p className="rechart__bar-notice-text">To see the comparison of spending enter the amount and save the result</p>
            </div>)
      }
    </div>
  );
};

RechartBar.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    [money.cash.FIRST]: PropTypes.number.isRequired,
    [money.type.FIRST]: PropTypes.string.isRequired,
    [money.cash.SECOND]: PropTypes.number.isRequired,
    [money.type.SECOND]: PropTypes.string.isRequired,
    [money.selectedDate]: PropTypes.date,
  }))
};

export default RechartBar;
