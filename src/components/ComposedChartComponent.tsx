// src/components/ComposedChartComponent.tsx

import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  color: #fff;
  margin: 20px;
  width: 100%;
  max-width: 500px;
`;

interface ComposedChartComponentProps {
  data: { date: string; marketCap: number; volume: number }[];
}

const ComposedChartComponent: React.FC<ComposedChartComponentProps> = ({ data }) => (
  <ChartContainer>
    <h2>Market Cap & Volume Over Time</h2>
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <XAxis dataKey="date" tick={{ fill: '#fff' }} />
        <YAxis tick={{ fill: '#fff' }} />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#333" />
        <Bar dataKey="volume" barSize={20} fill="#ff6347" />
        <Line type="monotone" dataKey="marketCap" stroke="#00ffff" />
      </ComposedChart>
    </ResponsiveContainer>
  </ChartContainer>
);

export default ComposedChartComponent;
