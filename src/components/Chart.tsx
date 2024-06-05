// src/components/Chart.tsx

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 20px 0;
`;

interface ChartProps {
  data: { date: string; price: number }[];
}

const Chart: React.FC<ChartProps> = ({ data }) => (
  <ChartContainer>
    <h2>Price Over Time</h2>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
    <h2>Bar Chart</h2>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="price" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

export default Chart;
