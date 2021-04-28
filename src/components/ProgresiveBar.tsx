import React from 'react';
import styled from '@emotion/styled';

export interface ProgresiveBarProps {
  max: number;
  current: number;
}

function ProgresiveBar({ max, current }: ProgresiveBarProps) {
  return (
    <ProgresiveBarBlock>
      <Bar />
    </ProgresiveBarBlock>
  );
}

const ProgresiveBarBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.palette.color.main};
`;

const Bar = styled.div`
  margin-bottom: 8px;
`;

export default ProgresiveBar;
