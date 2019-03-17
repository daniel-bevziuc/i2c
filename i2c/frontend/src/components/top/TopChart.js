import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Legend,
  ResponsiveContainer
} from 'recharts';

const SimpleLineChart = (props) => {
  return (
    <ResponsiveContainer width="99%" height={320}>
      <LineChart
        width={730}
        height={250}
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="product" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" name="Exposed" dataKey="exposed" stroke="#8884d8">
          <LabelList dataKey="metric" />
        </Line>
        <Line
          type="monotone"
          name="Control"
          dataKey="control"
          stroke="#82ca9d"
        />
        <Line type="monotone" name="Uplift" dataKey="uplift" stroke="blue" />
        <Line
          type="monotone"
          name="Pct Uplift"
          dataKey="pct_uplift"
          stroke="red"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
