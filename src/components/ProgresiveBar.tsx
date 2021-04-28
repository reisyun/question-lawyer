import React from 'react';
import styled from '@emotion/styled';
import Text from '@/components/common/Text';

export interface ProgresiveBarProps {
  label: string;
  children?: React.ReactNode;
}

function ProgresiveBar({ label, children }: ProgresiveBarProps) {
  return (
    <ProgresiveBarBlock>
      <Bar as="h3" fontSize="sm">
        {label}
      </Bar>
    </ProgresiveBarBlock>
  );
}

const ProgresiveBarBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0 16px;
`;

const Bar = styled(Text)`
  margin-bottom: 8px;
`;

export default ProgresiveBar;
