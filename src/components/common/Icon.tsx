import React from 'react';
import { size as iconSize } from 'polished';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProps } from '@/styles/theme';
import { IconSizeType } from '@/styles/theme/size';
import { ColorType } from '@/styles/theme/palette';
import * as icons from '@/assets/icons';

type Color = keyof ColorType;
type Size = keyof IconSizeType;

interface StyledIconProps {
  color?: Color;
  size?: Size;
}

const baseStyles = css`
  display: inline-flex;
`;

const colorStyles = ({ theme, color = 'secondary' }: StyledIconProps & ThemeProps) =>
  color &&
  css`
    & > svg {
      fill: ${theme.palette.color[color]};
    }
  `;

const sizeStyles = ({ theme, size = 'large' }: StyledIconProps & ThemeProps) =>
  size &&
  css`
    & > svg {
      ${iconSize(theme.size.iconSize[size])};
    }
  `;

const StyledIcon = styled.i<StyledIconProps>(baseStyles, colorStyles, sizeStyles);

/**
 * Icon component
 */
type Icons = keyof typeof icons;

export interface IconProps extends StyledIconProps {
  icon: Icons;
}

function Icon({ icon, ...props }: IconProps) {
  const SVG = icons[icon];

  return (
    <StyledIcon {...props}>
      <SVG />
    </StyledIcon>
  );
}

export default Icon;
