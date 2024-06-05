// src/components/Header.tsx

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
  font-size: 1.5em;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    CoinGecko Dashboard
  </HeaderContainer>
);

export default Header;
