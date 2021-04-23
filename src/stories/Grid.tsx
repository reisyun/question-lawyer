import styled from '@emotion/styled';

interface GridProps {
  flow?: 'row' | 'column';
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-auto-flow: ${props => props.flow || 'column'};
  gap: 1em;
`;
