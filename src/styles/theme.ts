import { DefaultTheme } from 'styled-components';

const mediaSize = {
  mobile: '400px',
  tablet: '768px',
  laptopS: '1023px',
  laptopM: '1239px',
  desktop: '1240px',
};

const fontWeight = {
  thin: `100`,
  extraLight: `200`,
  light: `300`,
  normal: `400`,
  medium: `500`,
  semiBold: `600`,
  bold: `700`,
  extraBold: `800`,
  heavy: `900`,
};

const size = {
  space: {
    xs: `0.8 rem`,
    s: `1.6 rem`,
    base: `2.4 rem`,
    md: `3.2 rem`,
    l: `4.0 rem`,
    xl: `4.8 rem`,
    xxl: `6.4 rem`,
    sl: `8.0 rem`, //super larger
  },
};

const fontSize = {
  primary: `1.4 rem`,
  secondary: `2.0 rem`,
  xlarge: `4.0 rem`,
  large: `2.4 rem`,
  medium: `1.6 rem`,
  small: '1.2 rem',
  xsmall: `1 rem`,
};

const color = {
  grey: {
    black: `#000000`,
    grey080: `#2B2B2B`,
    grey070: `#333333`,
    grey050: `#8F8C8C`,
    grey020: `#CCCCCC`,
    white: `#ffffff`,
  },
  yellow: {
    yellow: `#FDE11D`,
    yellow080: `#FDE74A`,
    yellow020: `#FFF9D2`,
  },
};

const theme: DefaultTheme = {
  fontWeight,
  mediaSize,
  size,
  fontSize,
  color,
};

export type FontWeight = typeof fontWeight;
export type MediaSize = typeof mediaSize;
export type Size = typeof size;
export type FontSize = typeof fontSize;
export type Color = typeof color;

export default theme;
