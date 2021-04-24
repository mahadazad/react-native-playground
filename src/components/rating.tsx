import * as React from 'react';
import styled from 'styled-components/native';
import { StarIcon } from './icons/start';

interface RatingProps {
  value: number;
  count: number;
}

export const Rating: React.FC<RatingProps> = ({ value, count }) => {
  return (
    <Container>
      <StarIcon />
      <RatingValue>{value.toFixed(1)}</RatingValue>
      <RatingCount>({count})</RatingCount>
    </Container>
  );
};

const RatingValue = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin: 0 2px 0 3px;
`;

const RatingCount = styled.Text`
  font-size: 12px;
  color: grey;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
