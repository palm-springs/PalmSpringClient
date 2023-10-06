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

      dimmed: string;
      navItem_hover: string;

      green: string;
      green_hover: string;
      dark_green: string;
      blue: string;
      background_green: string;

      red: string;
      red_hover: string;
      background_red: string;
      red_alpha_20: string;
    };
    fonts: {
      Title: SerializedStyles;
      Heading1: SerializedStyles;
      Heading2: SerializedStyles;
      Heading3_Semibold: SerializedStyles;
      Heading3_Regular: SerializedStyles;
      Body1_Semibold: SerializedStyles;
      Body1_Regular: SerializedStyles;
      Body2_Semibold: SerializedStyles;
      Body2_Regular: SerializedStyles;
      Body3_Semibold: SerializedStyles;
      Body3_Regular: SerializedStyles;
      Caption: SerializedStyles;
      Button_large: SerializedStyles;
      Button_medium: SerializedStyles;
      Button_small: SerializedStyles;
    };
    mobileFonts: {
      Title1: SerializedStyles;
      Title2: SerializedStyles;
      Title3: SerializedStyles;
      Body1_Semibold: SerializedStyles;
      Body1_Regular: SerializedStyles;
      Body2_Semibold: SerializedStyles;
      Body2_Regular: SerializedStyles;
      Caption: SerializedStyles;
      Button: SerializedStyles;
      Markdown_H1: SerializedStyles;
      Markdown_H2: SerializedStyles;
      Markdown_H3: SerializedStyles;
      Code: SerializedStyles;
    };
  }
}
