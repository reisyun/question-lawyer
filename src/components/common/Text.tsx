import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProps } from '@/styles/theme';
import { ColorType } from '@/styles/theme/palette';
import { FontSizeType } from '@/styles/theme/size';
import toEllipsis from '@/styles/utils/ellipsis';

type Color = keyof ColorType;
type Size = keyof FontSizeType;
type Ellipsis = boolean | { lines?: number };

export interface TextProps {
  color?: Color;
  fontSize?: Size;
  bold?: boolean;
  italic?: boolean;
  ellipsis?: Ellipsis;
}

const baseStyles = css`
  line-height: 1.5;
  word-break: break-word;
`;

const colorStyles = ({ theme, color = 'primary' }: TextProps & ThemeProps) =>
  color &&
  css`
    color: ${theme.palette.color[color]};
  `;

const sizeStyles = ({ theme, fontSize = 'md' }: TextProps & ThemeProps) =>
  fontSize &&
  css`
    font-size: ${theme.size.fontSize[fontSize]};
  `;

const boldStyles = ({ bold }: TextProps) =>
  bold &&
  css`
    font-weight: bold;
  `;

const italicStyles = ({ italic }: TextProps) =>
  italic &&
  css`
    font-style: italic;
  `;

const ellipsisStyles = ({ ellipsis }: TextProps) =>
  typeof ellipsis === 'object' ? toEllipsis(ellipsis.lines) : ellipsis && toEllipsis();

/**
 * Text component
 */
const Text = styled.span<TextProps>(
  baseStyles,
  colorStyles,
  sizeStyles,
  boldStyles,
  italicStyles,
  ellipsisStyles,
);

export default Text;
