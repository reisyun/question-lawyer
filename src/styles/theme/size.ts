const fontSize = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
};

const iconSize = {
  small: '16px',
  medium: '20px',
  large: '24px',
};

export type FontSizeType = typeof fontSize;
export type IconSizeType = typeof iconSize;

export interface ISize {
  fontSize: FontSizeType;
  iconSize: IconSizeType;
}

const size: ISize = {
  fontSize,
  iconSize,
};

export default size;
