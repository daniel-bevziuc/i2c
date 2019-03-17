import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import moment from 'moment';

const SimpleLineChart = (props) => {
  const data = props.data.map((item, i) => {
    const date = new Date(item.week_commencing);
    return {
      ...item,
      week_commencing: moment(date.getTime()).format('L')
    };
  });
  return (
    <ResponsiveContainer width="99%" height={320}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="week_commencing"
          domain={['auto', 'auto']}
          name="Time"
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="Exposed" dataKey="exposed" fill="#8884d8" />
        <Bar name="Control" dataKey="control" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
