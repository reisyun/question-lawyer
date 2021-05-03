import { css } from '@emotion/react';
import { reset } from '@/styles/global/reset';

const global = css`
  ${reset}

  html,
  body {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }

  #my_react_app {
    height: inherit;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
`;

export default global;
