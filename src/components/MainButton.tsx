import React from 'react';
import styled from '@emotion/styled';
import Button from '@/components/common/Button';

interface MainButtonProps {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function MainButton({ children, ...rest }: MainButtonProps) {
  return (
    <MainButtonBlock variant="containe" {...rest}>
      {children}
    </MainButtonBlock>
  );
}

const MainButtonBlock = styled(Button)`
  width: 100%;
  height: 48px;
  border-radius: 8px;
`;

export default MainButton;
