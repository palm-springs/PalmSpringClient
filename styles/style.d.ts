import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      pink_700: string;
      pink_500: string;
      pink_300: string;
      pink_100: string;

      gray_100_80: string;
      gray_100_25: string;
      gray_900_60: string;
    };
    fonts: {
      Title1: SerializedStyles;
      Title2: SerializedStyles;
      Body1: SerializedStyles;
      Body2: SerializedStyles;
      Body3: SerializedStyles;
      Body4: SerializedStyles;
    };
  }
}
