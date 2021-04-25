import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProps } from '@/styles/theme';

export interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'as'> {
  invalid?: boolean;
  validationHint?: string;
}

const baseStyles = ({ theme }: ThemeProps) => css`
  padding: 0 16px;
  width: 100%;
  height: 40px;
  background: ${theme.palette.background.level1};
  border: 0;
  border-radius: 4px;
  font-size: ${theme.size.fontSize.sm};
  color: ${theme.palette.color.primary};

  ::placeholder {
    color: ${theme.palette.color.hint};
  }

  :disabled {
    background: ${theme.palette.background.disabled};
  }
`;

const invalidStyles = ({ disabled, invalid }: InputProps) =>
  !disabled &&
  invalid &&
  css`
    border: 1px solid red;
    &:not(:focus)::placeholder {
      color: red;
      opacity: 0.5;
    }
  `;

/**
 * Input component
 */
const Input = styled.input(baseStyles, invalidStyles);

export default Input;
