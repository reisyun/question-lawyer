import { css } from '@emotion/react';

const breakpoints = {
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440,
};

export const mobile = (inner: any) => css`
  @media (max-width: ${breakpoints.md / 16}em) {
    ${inner};
  }
`;

export const phone = (inner: any) => css`
  @media (max-width: ${breakpoints.sm / 16}em) {
    ${inner};
  }
`;
