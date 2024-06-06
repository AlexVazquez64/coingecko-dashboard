// src/components/Card.tsx

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h2`
  color: #000;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  /* Add styles for the card content here */
`;

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => (
  <CardContainer>
    {title && <CardTitle>{title}</CardTitle>}
    <CardContent>{children}</CardContent>
  </CardContainer>
);

export default Card;
