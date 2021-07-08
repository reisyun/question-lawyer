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

  textarea:focus {
    outline: none;
  }
  button:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
`;

export default global;
