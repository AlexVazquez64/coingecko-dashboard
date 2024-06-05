// src/components/Header.tsx

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2em;
  font-weight: bold;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Title>CoinGecko Dashboard</Title>
  </HeaderContainer>
);

export default Header;
