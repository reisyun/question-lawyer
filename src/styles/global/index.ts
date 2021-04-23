import { css } from '@emotion/react';
import { reset } from '@/styles/global/reset';

const global = css`
  ${reset}

  body {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
`;

export default global;
