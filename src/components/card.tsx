import * as React from 'react';
import styled from 'styled-components/native';

interface CardProps {
  gutterBottom?: number;
  paddingBottom?: number;
}

export const Card: React.FC<CardProps> = ({ children, gutterBottom, paddingBottom }) => {
  return (
    <Container gutterBottom={gutterBottom} paddingBottom={paddingBottom}>
      {children}
    </Container>
  );
};

const Container = styled.View<Pick<CardProps, 'gutterBottom' | 'paddingBottom'>>`
  background: white;
  border-radius: 3px;
  width: 100%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  margin-bottom: ${props => props.gutterBottom || 0}px;
  padding-bottom: ${props => props.paddingBottom || 0}px;
`;
