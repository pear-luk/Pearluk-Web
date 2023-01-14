import { DefaultTheme } from 'styled-components';

const mediaSize = {
  mobile: '400px',
  tablet: '768px',
  laptopS: '1023px',
  laptopM: '1239px',
  desktop: '1240px',
};

const size = {};

const fontSize = {
  primary,
  secondary,
  xlarge,
  large,
  medium,
  small,
  xsmall,
};

const color = {
  black: `#000000`,
  white: `#ffffff`,
  warn,
  error,
  primary: `#FDE11D`,
  secondary,
};

const backgroundColor = {
  black: `#000000`,
  white: `#ffffff`,
  dark: `#2B2B2B`,
};

const theme: DefaultTheme = {
  mediaSize,
  size,
  fontSize,
  color,
  backgroundColor,
};

export type MediaSize = typeof mediaSize;
export type Size = typeof size;
export type FontSize = typeof fontSize;
export type Color = typeof color;
export type BackgroundColor = typeof backgroundColor;

export default theme;
