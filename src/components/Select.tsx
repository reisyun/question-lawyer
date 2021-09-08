import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ThemeProps } from '@/styles/theme';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

interface SelectProps {
  active?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
}

function Select({ active, disabled, children, onClick, ...rest }: SelectProps) {
  const className = active ? 'selected' : '';

  return (
    <SelectButton
      size="large"
      variant="outline"
      disabled={disabled}
      onClick={onClick}
      className={className}
      {...rest}
    >
      {children}
    </SelectButton>
  );
}

const baseStyle = ({ theme }: ThemeProps) => css`
  margin-top: 16px;
  background: white;
  /* transition 주기 위해 border-color = 투명 */
  color: ${theme.palette.color.secondary};

  /* 더 나은 가시성을 위해 추가 */
  border: 1px solid rgba(39, 60, 117, 0.25);
  border-radius: 8px;
  box-shadow: 0 0.5px 2px rgba(0, 0, 0, 0.05);

  transition: border-color 0.2s, font-weight 0.2s, color 0.2s;

  &.selected {
    border: 2px solid ${theme.palette.color.main};
    color: ${theme.palette.color.main};
  }

  /* tab 버튼을 누를 경우 포커스 스타일 */
  &:focus {
    background: ${theme.palette.overlay.focus};
  }

  @media (max-width: 768px) {
    &:hover {
      background: white;
    }
  }
`;

const SelectButton = styled(Button)`
  ${baseStyle}

  &:first-of-type {
    margin-top: 0;
  }
`;

const SelectInput = styled(Input)`
  ${baseStyle};
  height: 64px;
  font-size: ${({ theme }) => theme.size.fontSize.md};
  color: ${({ theme }) => theme.palette.color.secondary};
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.palette.color.secondary};
  }

  &:focus {
    outline: none;
  }
`;

Select.Button = SelectButton;
Select.Input = SelectInput;

export default Select;
