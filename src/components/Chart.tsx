// src/components/Chart.tsx

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: { date: string; price: number }[];
}

const Chart: React.FC<ChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
