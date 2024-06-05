// src/components/Filters.tsx

import React, { useState, useEffect } from 'react';
import { getCoinsList } from '../services/api';

interface FiltersProps {
  onCoinChange: (coin: string) => void;
  onDaysChange: (days: number) => void;
}

const Filters: React.FC<FiltersProps> = ({ onCoinChange, onDaysChange }) => {
  const [coins, setCoins] = useState<{ id: string; name: string }[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<string>('');
  const [selectedDays, setSelectedDays] = useState<number>(7);

  useEffect(() => {
    getCoinsList().then((response) => setCoins(response.data));
  }, []);

  const handleCoinChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const coin = event.target.value;
    setSelectedCoin(coin);
    onCoinChange(coin);
  };

  const handleDaysChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const days = parseInt(event.target.value, 10);
    setSelectedDays(days);
    onDaysChange(days);
  };

  return (
    <div>
      <label>
        Coin:
        <select value={selectedCoin} onChange={handleCoinChange}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Days:
        <select value={selectedDays} onChange={handleDaysChange}>
          <option value={7}>7</option>
          <option value={30}>30</option>
          <option value={90}>90</option>
          <option value={365}>365</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
