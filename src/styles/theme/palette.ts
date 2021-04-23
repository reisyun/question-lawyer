import { rgba } from 'polished';

const color = {
  main: '#489cea',
  sub: '#225C86',
  primary: '#212121',
  secondary: '#757575',
  hint: '#BDBDBD',
  white: '#FFF',
  black: '#000',
};

const background = {
  default: '#F4F7FB',
  disabled: '#E6E6E6',
  level1: '#EFEFEF',
};

const divider = rgba(color.black, 0.12);

const overlay = {
  hover: rgba(color.black, 0.04),
  focus: rgba(color.black, 0.12),
  selected: rgba(color.main, 0.08),
  activated: rgba(color.main, 0.12),
};

export type ColorType = typeof color;
export type BackgroundType = typeof background;
export type DividerType = typeof divider;
export type OverlayType = typeof overlay;

export interface IPalette {
  color: ColorType;
  background: BackgroundType;
  divider: DividerType;
  overlay: OverlayType;
}

const palette: IPalette = {
  color,
  background,
  divider,
  overlay,
};

export default palette;
