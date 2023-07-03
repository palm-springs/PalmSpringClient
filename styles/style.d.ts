import 'styled-components';

type PointColorsType = 'green' | 'dark-green' | 'blue';
type GreyStyleType =
  | 'White'
  | 'Basic'
  | 'Black'
  | 0
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950
  | 1000;
type TypeSystemType = 'Title' | 'Heading1' | 'Heading2' | 'Body1' | 'Body2' | 'Body3' | 'Caption';

declare module 'styled-components' {
  export interface DefaultTheme {
    PointColors: {
      [key: PointColorsType]: string;
    };
    GreyStyle: {
      [key: GreyStyleType]: string;
    };
    TypeSystem: {
      [key: TypeSystemType]: SerializedStyles;
    };
  }
}
