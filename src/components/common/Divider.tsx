import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProps } from '@/styles/theme';

export interface DividerProps {
  vertical?: boolean;
}

const baseStyles = ({ theme, vertical = false }: DividerProps & ThemeProps) => {
  const divider = {
    horizon: css`
      margin: 0;
      width: 100%;
      border-color: ${theme.palette.divider};
    `,
    vertical: css`
      display: inline-block;
      margin: 0 8px;
      width: 1px;
      height: 1em;
      vertical-align: middle;
      border-color: ${theme.palette.divider};
    `,
  };

  return vertical ? divider.vertical : divider.horizon;
};

/**
 * Divider component
 */
const Divider = styled.hr<DividerProps>(baseStyles);

export default Divider;
