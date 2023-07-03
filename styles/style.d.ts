import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    PointColors: {
      Green: string;
      DarkGreen: string;
      Blue: string;
    };
    GreyStyle: {
      White: string;
      Basic: string;
      Black: string;
      Grey0: string;
      Grey50: string;
      Grey100: string;
      Grey200: string;
      Grey300: string;
      Grey400: string;
      Grey500: string;
      Grey600: string;
      Grey700: string;
      Grey800: string;
      Grey900: string;
      Grey950: string;
      Grey1000: string;
    };
    TypeSystem: {
      Title: RuleSet<object>;
      Heading1: RuleSet<object>;
      Heading2_semibold: RuleSet<object>;
      Heading2_regular: RuleSet<object>;
      Body1_semibold: RuleSet<object>;
      Body1_regular: RuleSet<object>;
      Body2_semibold: RuleSet<object>;
      Body2_regular: RuleSet<object>;
      Body3: RuleSet<object>;
      Caption: RuleSet<object>;
    };
  }
}
