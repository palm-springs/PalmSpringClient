import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey_0: string;
      grey_50: string;
      grey_100: string;
      grey_200: string;
      grey_300: string;
      grey_400: string;
      grey_500: string;
      grey_600: string;
      grey_700: string;
      grey_800: string;
      grey_900: string;
      grey_950: string;
      grey_1000: string;

      green: string;
      darkGreen: string;
      blue: string;
    };
    fonts: {
      Title: SerializedStyles;
      Heading1: SerializedStyles;
      Heading2_Semibold: SerializedStyles;
      Heading2_Regular: SerializedStyles;
      Body1_Semibold: SerializedStyles;
      Body1_Regular: SerializedStyles;
      Body2_Semibold: SerializedStyles;
      Body2_Regular: SerializedStyles;
      Body3_Semibold: SerializedStyles;
      Body3_Regular: SerializedStyles;
      Caption: SerializedStyles;
    };
  }
}
