/* eslint-disable @typescript-eslint/no-empty-interface */
import '@emotion/react';
import { ITheme } from '@/styles/theme';

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
