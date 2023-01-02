import styled from '@emotion/styled';

export const GameGrid = styled.div`
  border: 2px solid hsl(0 0% 50% / 0.2);
  display: grid;
  gap: 0.25rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  padding: 0.25rem;

  > *:nth-of-type(odd) {
    background-color: hsl(0 0% 50% / 0.2);
  }
`;
