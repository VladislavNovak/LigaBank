import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {money} from '../../js/constants';
import dayjs from 'dayjs';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const RechartCustom = ({history}) => {
  // eslint-disable-next-line no-unused-vars
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
      // total[key] = temp;
      return total;
    }, []);

    setDataForChart(preparedArray);

    const heightMax = preparedArray.reduce((total, item) => {
      for (let key in item) {
        if (key !== `data` && key !== `RUB`) {
          if (total < item[key]) {
            total = item[key];
          }
        }
      }

      return total;
    }, 0);

    setDimensionChart({width: (preparedArray.length < 7) ? 14 * preparedArray.length : 100, height: heightMax / 10 + 300});
  }, [history]);

  return (
    <div className="rechart">
      <h1 className="rechart__header">Dynamics of expenditures</h1>

      <ResponsiveContainer width={`${dimensionChart.width}%`} height={dimensionChart.height} className="rechartX">
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
          <Bar dataKey="USD" stackId="a" fill="#2E8B57" />
          <Bar dataKey="GBP" stackId="a" fill="#CD5C5C" />
          <Bar dataKey="EUR" stackId="a" fill="#8A2BE2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

RechartCustom.propTypes = {
  // handleAction: PropTypes.func,
  // onClickBackspace: PropTypes.func,
  // onClickReset: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.shape({
    [money.cash.FIRST]: PropTypes.number.isRequired,
    [money.type.FIRST]: PropTypes.string.isRequired,
    [money.cash.SECOND]: PropTypes.number.isRequired,
    [money.type.SECOND]: PropTypes.string.isRequired,
    [money.selectedDate]: PropTypes.date,
  }))
};

export default RechartCustom;
