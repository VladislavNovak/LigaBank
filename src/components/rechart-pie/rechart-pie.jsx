import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {RADIAN, money, RechartsColor} from '../../js/constants';
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';

const RechartPie = ({history}) => {
  const [dataForChart, setDataForChart] = useState([]);

  useEffect(() => {
    const filteredArray = history.filter(({status}) => status);

    const rawAssembly = filteredArray.reduce((total, {firstType, firstCash}) => {
      total[firstType] = total.hasOwnProperty(firstType) ? total[firstType] + firstCash : firstCash;

      return total;
    }, {});

    const preparedArray = Object.entries(rawAssembly).reduce((total, [key, values]) => {
      total.push({type: key, value: values});
      return total;
    }, []);

    setDataForChart(preparedArray);
  }, [history]);

  const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? `start` : `end`} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="rechart__pie block-style">
      {/* {
        dataForChart[0].value || dataForChart[1].value || dataForChart[2].value ? console.log(`YES: `) : console.log(`NO`)
      } */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={dataForChart}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value" >
            {dataForChart.map((item, index) => (
              <Cell key={`cell-${index}`} fill={RechartsColor[item.type]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

RechartPie.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    [money.cash.FIRST]: PropTypes.number.isRequired,
    [money.type.FIRST]: PropTypes.string.isRequired,
    [money.cash.SECOND]: PropTypes.number.isRequired,
    [money.type.SECOND]: PropTypes.string.isRequired,
    [money.selectedDate]: PropTypes.date,
  }))
};

export default RechartPie;
