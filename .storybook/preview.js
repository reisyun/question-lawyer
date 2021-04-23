import React from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import theme from '@/styles/theme';
import global from '@/styles/global';

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Story />
    </ThemeProvider>
  ),
];
