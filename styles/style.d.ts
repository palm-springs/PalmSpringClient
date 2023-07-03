import 'styled-components';

type PointColorsType = 'green' | 'dark-green' | 'blue';
type GreyStyleType =
  | 'White'
  | 'Basic'
  | 'Black'
  | 'grey0'
  | 'grey50'
  | 'grey100'
  | 'grey200'
  | 'grey300'
  | 'grey400'
  | 'grey500'
  | 'grey600'
  | 'grey700'
  | 'grey800'
  | 'grey900'
  | 'grey950'
  | 'grey1000';
type TypeSystemType = 'Title' | 'Heading1' | 'Heading2' | 'Body1' | 'Body2' | 'Body3' | 'Caption';

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
      Heading2: RuleSet<object>;
      Body1: RuleSet<object>;
      Body2: RuleSet<object>;
      Body3: RuleSet<object>;
      Caption: RuleSet<object>;
    };
  }
}
