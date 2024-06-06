// src/components/Chart.tsx

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import styled from "styled-components";

const ChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

const ChartWrapper = styled.div`
  flex: 1 1 calc(50% - 20px);
  max-width: calc(50% - 20px);
`;

const Card = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  color: #fff;
`;

interface ChartProps {
  data: { date: string; price: number }[];
  pieData: { name: string; value: number }[];
}

const formatNumber = (number: number) => {
  return "$" + number.toLocaleString("en-US", { maximumFractionDigits: 2 });
};

const Chart: React.FC<ChartProps> = ({ data }) => (
  <ChartsContainer>
    <ChartWrapper>
      <Card>
        <h2 style={{ textAlign: "center" }}>Price Over Time</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <XAxis dataKey="date" tick={{ fill: "#fff" }} />
            <YAxis tick={{ fill: "#fff" }} />
            <Tooltip
              contentStyle={{ color: "#642F6C", backgroundColor: "#ffffff" }}
              formatter={(value: number) => formatNumber(value)}
            />
            <Line type="monotone" dataKey="price" stroke="#642F6C" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </ChartWrapper>

    <ChartWrapper>
      <Card>
        <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="date" tick={{ fill: "#fff" }} />
            <YAxis tick={{ fill: "#fff" }} />
            <Tooltip
              contentStyle={{ color: "#642F6C", backgroundColor: "#ffffff" }}
              formatter={(value: number) => formatNumber(value)}
            />
            <Bar dataKey="price" fill="#642F6C" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </ChartWrapper>
  </ChartsContainer>
);

export default Chart;
