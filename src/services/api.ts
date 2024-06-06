// src/services/api.ts

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export const getCoinData = (coinId: string, days: number) =>
  api.get(`/coins/${coinId}/market_chart`, {
    params: {
      vs_currency: "usd",
      days,
    },
  });

export const getCoinsList = () => api.get("/coins/list");

export const getCoinDetails = (coinId: string) => api.get(`/coins/${coinId}`);

export default api;
