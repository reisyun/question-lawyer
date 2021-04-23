import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface ImageProps {
  circle?: boolean;
}

const baseStyles = css`
  object-fit: cover;
  display: block;
  width: 100%;
  height: auto;
`;

const circleStyles = ({ circle = false }: ImageProps) =>
  circle &&
  css`
    border-radius: 50% !important;
  `;

/**
 * Image component
 */
const Image = styled.img<ImageProps>(baseStyles, circleStyles);

export default Image;
