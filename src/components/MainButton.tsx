import React from 'react';
import styled from '@emotion/styled';
import { lighten } from 'polished';
import Button from '@/components/common/Button';

interface MainButtonProps {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
}

function MainButton({ type, disabled, children, onClick, ...rest }: MainButtonProps) {
  return (
    <MainButtonBlock
      type={type}
      size="medium"
      variant="containe"
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </MainButtonBlock>
  );
}

const MainButtonBlock = styled(Button)`
  margin-top: 24px;
  width: 100%;
  border-radius: 8px;

  &:focus {
    background: ${({ theme }) => lighten(0.1, theme.palette.color.main)};
  }
`;

export default MainButton;
