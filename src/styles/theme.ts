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
    xxsmall: `0.4rem`,
    xsmall: `0.8rem`,
    small: `1.6rem`,
    base: `2.4rem`,
    medium: `3.2rem`,
    large: `4.0rem`,
    xlarge: `4.8rem`,
    xxlarge: `6.4rem`,
    superLarge: `8.0rem`, //super larger
  },
  font: {
    primary: `1.4rem`,
    secondary: `2.0rem`,
    xlarge: `4.0rem`,
    large: `2.4rem`,
    medium: `1.6rem`,
    small: '1.2rem',
    xsmall: `1rem`,
  },
  width: {
    medium: '29.4rem',
    large: '34.2rem',
  },
};

// const fontSize = {
//   primary: `1.4 rem`,
//   secondary: `2.0 rem`,
//   xlarge: `4.0 rem`,
//   large: `2.4 rem`,
//   medium: `1.6 rem`,
//   small: '1.2 rem',
//   xsmall: `1 rem`,
// };

const color = {
  grey: {
    black: `#000000`,
    grey080: `#2B2B2B`,
    grey070: `#333333`,
    grey060: '#424242',
    grey050: `#8F8C8C`,
    grey020: `#CCCCCC`,
    white: `#ffffff`,
    yellowGrey: '#332D06',
  },
  yellow: {
    yellow: `#FDE11D`,
    yellow080: `#FDE74A`,
    yellow020: `#FFF9D2`,
    darkYellow: '#CAB417',
  },
};

const theme: DefaultTheme = {
  fontWeight,
  mediaSize,
  size,
  color,
};

export type FontWeight = typeof fontWeight;
export type MediaSize = typeof mediaSize;
export type Size = typeof size;
// export type FontSize = typeof fontSize;
export type Color = typeof color;

export default theme;
