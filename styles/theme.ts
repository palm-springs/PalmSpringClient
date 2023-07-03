import { css, DefaultTheme } from 'styled-components';

type PickDefaultThemeProps<T extends keyof DefaultTheme> = Pick<DefaultTheme, T>[T];

const PointColors: PickDefaultThemeProps<'PointColors'> = {
  Green: '#19DB7B',
  DarkGreen: '#1A9B6F',
  Blue: '#2F4CA9',
};

const GreyStyle: PickDefaultThemeProps<'GreyStyle'> = {
  White: '#FFFFFF',
  Basic: '#343A40',
  Black: '#000000',
  Grey0: '#FFFFFF',
  Grey50: '#FBFDFC',
  Grey100: '#F8F9FA',
  Grey200: '#F1F3F5',
  Grey300: '#E9ECEF',
  Grey400: '#DEE2E6',
  Grey500: '#CED4DA',
  Grey600: '#ADB5BD',
  Grey700: '#868E96',
  Grey800: '#495057',
  Grey900: '#343A40',
  Grey950: '#212529',
  Grey1000: '#000000',
};

const TypeSystem: PickDefaultThemeProps<'TypeSystem'> = {
  Title: css`
    font-weight: 700;
    font-size: 3rem;
    line-height: 1.4;
    letter-spacing: -1%;
  `,
  Heading1: css`
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.4;
    letter-spacing: -1%;
  `,
  Heading2: css`
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.4;
    letter-spacing: -1%;
  `,
  Body1: css`
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.7;
    letter-spacing: -0.3%;
  `,
  Body2: css`
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: -0.3%;
  `,
  Body3: css`
    font-weight: 400;
    font-size: 0.875rem;
    letter-spacing: -0.3%;
  `,
  Caption: css`
    font-weight: 500;
    font-size: 0.75rem;
  `,
};

const theme: DefaultTheme = {
  PointColors,
  GreyStyle,
  TypeSystem,
};
export default theme;
