import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeProps } from '@/styles/theme';

type Size = 'small' | 'default';

export interface TagProps {
  size?: Size;
}

const baseStyles = ({ theme }: ThemeProps) => css`
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  border: 1px solid ${theme.palette.color.main};
  font-size: ${theme.size.fontSize.sm};
  color: ${theme.palette.color.main};
`;

const sizeStyles = ({ size = 'default' }: TagProps) =>
  ({
    small: css`
      height: 24px;
      border-radius: 12px;
    `,
    default: css`
      height: 32px;
      border-radius: 16px;
    `,
  }[size]);

/**
 * Tag component
 */
const Tag = styled.div<TagProps>(baseStyles, sizeStyles);

export default Tag;
