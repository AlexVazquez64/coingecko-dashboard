// src/App.tsx

import React, { useState, useEffect } from "react";
import { getCoinData, getCoinDetails } from "./services/api";
import Chart from "./components/Chart";
import Filters from "./components/Filters";
import Header from "./components/Header";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #1a1a2e;
    color: #fff;
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
  const [coin, setCoin] = useState<string>("bitcoin");
  const [days, setDays] = useState<number>(7);
  const [data, setData] = useState<{ date: string; price: number }[]>([]);
  const [pieData, setPieData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    getCoinData(coin, days).then((response) => {
      const prices = response.data.prices;
      const formattedData = prices.map((price: [number, number]) => ({
        date: new Date(price[0]).toLocaleDateString(),
        price: price[1],
      }));
      setData(formattedData);
    });

    getCoinDetails(coin).then((response) => {
      const { market_data } = response.data;
      const supplyData = [
        { name: "Circulating Supply", value: market_data.circulating_supply },
        { name: "Total Supply", value: market_data.total_supply },
        {
          name: "Max Supply",
          value: market_data.max_supply || market_data.total_supply,
        },
      ];
      setPieData(supplyData);
    });
  }, [coin, days]);

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Filters onCoinChange={setCoin} onDaysChange={setDays} />
      <Chart data={data} pieData={[]} />
    </Container>
  );
};

export default App;
