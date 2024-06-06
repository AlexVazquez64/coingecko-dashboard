// src/components/Filters.tsx

import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  width: 100%;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Select = styled.select`
  background: #1a1a2e;
  color: #00ffff;
  border: 1px solid #00ffff;
  padding: 10px;
  border-radius: 5px;
`;

const Filters: React.FC<{
  onCoinChange: (coin: string) => void;
  onDaysChange: (days: number) => void;
}> = ({ onCoinChange, onDaysChange }) => (
  <FiltersContainer>
    <div>
      <label htmlFor="coin">Select Coin: </label>
      <Select id="coin" onChange={(e) => onCoinChange(e.target.value)}>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="ripple">Ripple</option>
        <option value="litecoin">Litecoin</option>
      </Select>
    </div>
    <div>
      <label htmlFor="days">Select Days: </label>
      <Select id="days" onChange={(e) => onDaysChange(Number(e.target.value))}>
        <option value={7}>7</option>
        <option value={30}>30</option>
        <option value={90}>90</option>
      </Select>
    </div>
  </FiltersContainer>
);

export default Filters;
