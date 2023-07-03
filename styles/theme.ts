import { css, DefaultTheme } from 'styled-components';

const PointColors = {
  green: '#19DB7B',
  'dark-green': '#1A9B6F',
  blue: '#2F4CA9',
};

const GreyStyle = {
  0: '#FFFFFF',
  White: '#FFFFFF',
  50: '#FBFDFC',
  100: '#F8F9FA',
  200: '#F1F3F5',
  300: '#E9ECEF',
  400: '#DEE2E6',
  500: '#CED4DA',
  600: '#ADB5BD',
  700: '#868E96',
  800: '#495057',
  900: '#343A40',
  Basic: '#343A40',
  950: '#212529',
  1000: '#000000',
  Black: '#000000',
};

const TypeSystem = {
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
