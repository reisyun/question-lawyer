const fontSize = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  subtitle: '28px',
  title: '40px',
};

const iconSize = {
  small: '16px',
  medium: '20px',
  large: '24px',
  xlarge: '40px',
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
