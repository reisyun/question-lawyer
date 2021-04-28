import { rgba } from 'polished';

const color = {
  main: '#273C75',
  primary: '#212121',
  secondary: '#757575',
  hint: '#BDBDBD',
  white: '#FFF',
  black: '#000',
  disabled: '#E8E9EB',
  background: '#F5F6FA',
  success: '#27ae60',
};

const divider = rgba(color.black, 0.12);

const overlay = {
  hover: rgba(color.black, 0.03),
  focus: rgba(color.black, 0.12),
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
