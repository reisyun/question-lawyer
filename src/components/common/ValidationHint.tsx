import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProps } from '@/styles/theme';

export interface ValidationHintProps {
  disabled?: boolean;
  invalid?: boolean;
}

const baseStyles = ({ theme }: ThemeProps) => css`
  display: flex;
  align-items: flex-start;
  margin-top: 8px;
  font-size: ${theme.size.fontSize.sm};
  color: ${theme.palette.color.secondary};
`;

const disabledStyles = ({ theme, disabled }: ValidationHintProps & ThemeProps) =>
  disabled &&
  css`
    color: ${theme.palette.color.hint};
    opacity: 0.5;
  `;

const invalidStyles = ({ invalid, disabled }: ValidationHintProps) =>
  !disabled &&
  invalid &&
  css`
    color: red;
  `;

/**
 * ValidationHint component
 */
const ValidationHint = styled.span<ValidationHintProps>(baseStyles, disabledStyles, invalidStyles);

export default ValidationHint;
