import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { lighten } from 'polished';
import { ThemeProps } from '@/styles/theme';

type Size = 'small' | 'medium' | 'large';
type Variant = 'none' | 'containe' | 'outline' | 'text';

export interface ButtonProps {
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
}

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background: none;
  outline: none;
  border: none;
  border-radius: 4px;
  transition: background 0.3s;
  cursor: pointer;

  & > span {
    margin: 0 8px;
  }
`;

const sizeStyles = ({ theme, size = 'medium' }: ButtonProps & ThemeProps) => {
  return {
    small: css`
      padding: 0 16px;
      height: 32px;
      font-size: ${theme.size.fontSize.xs};
    `,
    medium: css`
      padding: 0 24px;
      height: 40px;
      font-size: ${theme.size.fontSize.sm};
    `,
    large: css`
      padding: 0 32px;
      height: 48px;
      font-size: ${theme.size.fontSize.md};
    `,
  }[size];
};

const variantStyles = ({ theme, variant = 'none' }: ButtonProps & ThemeProps) => {
  return {
    none: null,
    containe: css`
      background: ${theme.palette.color.main};
      color: ${theme.palette.color.white};

      &:hover {
        background: ${lighten(0.04, theme.palette.color.main)};
      }
    `,
    outline: css`
      background: transparent;
      color: ${theme.palette.color.primary};
      border: 1px solid ${theme.palette.divider};

      &:hover {
        background: ${theme.palette.overlay.hover};
      }
    `,
    text: css`
      background: transparent;
      color: ${theme.palette.color.main};

      &:hover {
        background: ${theme.palette.overlay.hover};
      }
    `,
  }[variant];
};

const disabledStyles = ({ theme, disabled }: ButtonProps & ThemeProps) =>
  disabled &&
  css`
    background: ${theme.palette.background.disabled};
    color: ${theme.palette.color.secondary};

    &:disabled {
      background: ${theme.palette.background.disabled};
      cursor: auto;
    }
  `;

/**
 * Button component
 */
const Button = styled.button<ButtonProps>(baseStyles, sizeStyles, variantStyles, disabledStyles);

export default Button;
