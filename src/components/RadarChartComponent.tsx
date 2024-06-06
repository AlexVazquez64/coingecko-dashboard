// src/components/RadarChartComponent.tsx

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 20px;
`;

interface RadarChartComponentProps {
  data: { subject: string; A: number; B: number }[];
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({ data }) => (
  <ChartContainer>
    <h2>Attribute Comparison</h2>
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Tooltip />
        <Radar name="Coin A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Coin B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

export default RadarChartComponent;
