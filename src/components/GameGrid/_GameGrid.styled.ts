import styled from '@emotion/styled';

export const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);

  > *:nth-child(odd) {
    background-color: hsl(0 0% 50% / 0.2);
  }
`;
