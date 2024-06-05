// src/components/Filters.tsx

import React from 'react';
import styled from 'styled-components';

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  gap: 10px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  min-width: 150px;
`;

interface FiltersProps {
  onCoinChange: (coin: string) => void;
  onDaysChange: (days: number) => void;
}

const Filters: React.FC<FiltersProps> = ({ onCoinChange, onDaysChange }) => {
  const handleCoinChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCoinChange(event.target.value);
  };

  const handleDaysChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onDaysChange(parseInt(event.target.value, 10));
  };

  return (
    <FiltersContainer>
      <Select onChange={handleCoinChange} defaultValue="bitcoin">
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="ripple">Ripple</option>
        {/* Añadir más opciones según sea necesario */}
      </Select>
      <Select onChange={handleDaysChange} defaultValue="7">
        <option value="1">1 día</option>
        <option value="7">7 días</option>
        <option value="30">30 días</option>
        <option value="90">90 días</option>
        <option value="365">1 año</option>
      </Select>
    </FiltersContainer>
  );
};

export default Filters;
