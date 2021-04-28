import React from 'react';
import styled from '@emotion/styled';
import Button from '@/components/common/Button';

interface MainButtonProps {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function MainButton({ children, ...rest }: MainButtonProps) {
  return (
    <MainButtonBlock size="medium" variant="containe" {...rest}>
      {children}
    </MainButtonBlock>
  );
}

const MainButtonBlock = styled(Button)`
  margin-top: 24px;
  width: 100%;
  border-radius: 8px;
`;

export default MainButton;
