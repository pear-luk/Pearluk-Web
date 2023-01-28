import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    mediaSize: {
      mobile: string;
      tablet: string;
      laptopS: string;
      laptopM: string;
      desktop: string;
    };

    fontWeight: {
      thin: string;
      extraLight: string;
      light: string;
      normal: string;
      medium: string;
      semiBold: string;
      bold: string;
      extraBold: string;
      heavy: string;
    };

    size: {
      space: {
        xxsmall: string;
        xsmall: string;
        small: string;
        base: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        superLarge: string;
      };
      font: {
        primary: string;
        secondary: string;
        xlarge: string;
        large: string;
        medium: string;
        small: string;
        xsmall: string;
      };
    };

    color: {
      grey: {
        black: string;
        grey080: string;
        grey070: string;
        grey050: string;
        grey020: string;
        white: string;
      };
      yellow: {
        yellow: string;
        yellow080: string;
        yellow020: string;
      };
    };
  }
