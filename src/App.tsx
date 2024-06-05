// src/App.tsx

import React, { useState, useEffect } from 'react';
import { getCoinData } from './services/api';
import Chart from './components/Chart';
import Filters from './components/Filters';
import Header from './components/Header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f4f4f4;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

const App: React.FC = () => {
  const [coin, setCoin] = useState<string>('bitcoin');
  const [days, setDays] = useState<number>(7);
  const [data, setData] = useState<{ date: string; price: number }[]>([]);

  useEffect(() => {
    getCoinData(coin, days).then((response) => {
      const prices = response.data.prices;
      const formattedData = prices.map((price: [number, number]) => ({
        date: new Date(price[0]).toLocaleDateString(),
        price: price[1],
      }));
      setData(formattedData);
    });
  }, [coin, days]);

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Filters onCoinChange={setCoin} onDaysChange={setDays} />
      <Chart data={data} />
    </Container>
  );
};

export default App;
