// src/components/Header.tsx

import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
`;

const Title = styled.h1`
  color: #00ffff;
  font-size: 2rem;
  margin: 0;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Title>Virtual Coin Dashboard</Title>
  </HeaderContainer>
);

export default Header;
