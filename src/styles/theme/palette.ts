import { rgba } from 'polished';

const color = {
  main: '#273C75',
  sub: '#FFEAA7',
  primary: '#212121',
  secondary: '#757575',
  hint: '#BDBDBD',
  white: '#FFF',
  black: '#000',
  disabled: rgba('#000', 0.06),
  background: '#F0F3FB',
  success: '#27ae60',
};

const divider = rgba(color.black, 0.12);

const overlay = {
  hover: rgba(color.black, 0.02),
  focus: rgba(color.black, 0.03),
  selected: rgba(color.main, 0.08),
  activated: rgba(color.main, 0.12),
};

export type ColorType = typeof color;
export type DividerType = typeof divider;
export type OverlayType = typeof overlay;

export interface IPalette {
  color: ColorType;
  divider: DividerType;
  overlay: OverlayType;
}

const palette: IPalette = {
  color,
  divider,
  overlay,
};

export default palette;
