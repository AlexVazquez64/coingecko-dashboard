// src/App.tsx

import React, { useState, useEffect } from 'react';
import { getCoinData } from './services/api';
import Chart from './components/Chart';
import Filters from './components/Filters';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

interface CoinData {
  prices: [number, number][];
}

const App: React.FC = () => {
  const [coin, setCoin] = useState<string>('bitcoin');
  const [days, setDays] = useState<number>(7);
  const [data, setData] = useState<{ date: string; price: number }[]>([]);

  useEffect(() => {
    getCoinData(coin, days).then((response) => {
      const prices: CoinData = response.data;
      const formattedData = prices.prices.map((price) => ({
        date: new Date(price[0]).toLocaleDateString(),
        price: price[1],
      }));
      setData(formattedData);
    });
  }, [coin, days]);

  return (
    <Container>
      <GlobalStyle />
      <h1>CoinGecko Dashboard</h1>
      <Filters onCoinChange={setCoin} onDaysChange={setDays} />
      <Chart data={data} />
    </Container>
  );
};

export default App;
