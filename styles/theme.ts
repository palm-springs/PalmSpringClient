import { css, DefaultTheme } from 'styled-components';

const colors = {
  grey_0: '#FFFFFF',
  grey_50: '#FBFDFC',
  grey_100: '#F8F9FA',
  grey_200: '#F1F3F5',
  grey_300: '#E9ECEF',
  grey_400: '#DEE2E6',
  grey_500: '#CED4DA',
  grey_600: '#ADB5BD',
  grey_700: '#868E96',
  grey_800: '#495057',
  grey_900: '#343A40',
  grey_950: '#212529',
  grey_1000: '#000000',

  green: '#19DB7B',
  darkGreen: '#1A9B6F',
  blue: '#2F4CA9',
};

const fonts = {
  Title: css`
    line-height: 140%;
    letter-spacing: 0.1em;
    font-family: 'Pretendard';
    font-size: 3rem;
    font-weight: 700;
    font-style: normal;
  `,
  Heading1: css`
    line-height: 140%;
    letter-spacing: 0.1em;
    font-family: 'Pretendard';
    font-size: 2rem;
    font-weight: 700;
    font-style: normal;
  `,
  Heading2: css`
    line-height: 140%;
    letter-spacing: 0.1em;
    font-family: 'Pretendard';
    font-size: 1.75rem;
    font-weight: 700;
    font-style: normal;
  `,
  Heading3_Semibold: css`
    line-height: 140%;
    letter-spacing: 0.1em;
    font-family: 'Pretendard';
    font-size: 1.5rem;
    font-weight: 600;
    font-style: normal;
  `,
  Heading3_Regular: css`
    line-height: 140%;
    letter-spacing: 0.1em;
    font-family: 'Pretendard';
    font-size: 1.5rem;
    font-weight: 400;
    font-style: normal;
  `,

  Body1_Semibold: css`
    line-height: 170%;
    letter-spacing: 0.03em;
    font-family: 'Pretendard';
    font-size: 1.125rem;
    font-weight: 600;
    font-style: normal;
  `,
  Body1_Regular: css`
    line-height: 170%;
    letter-spacing: 0.03em;
    font-family: 'Pretendard';
    font-size: 1.125rem;
    font-weight: 400;
    font-style: normal;
  `,
  Body2_Semibold: css`
    line-height: 160%;
    letter-spacing: 0.03em;
    font-family: 'Pretendard';
    font-size: 1rem;
    font-weight: 600;
    font-style: normal;
  `,
  Body2_Regular: css`
    line-height: 160%;
    letter-spacing: 0.03em;
    font-family: 'Pretendard';
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
  `,
  Body3_Semibold: css`
    letter-spacing: 0.03em;
    font-family: 'Pretendard';
    font-size: 0.875;
    font-weight: 600;
    font-style: normal;
  `,
  Body3_Regular: css`
    letter-spacing: 0.03em;
    font-family: 'Pretendard';
    font-size: 0.875;
    font-weight: 400;
    font-style: normal;
  `,
  Caption: css`
    letter-spacing: 0em;
    font-family: 'Pretendard';
    font-size: 0.75rem;
    font-weight: 500;
    font-style: normal;
  `,
  Button_large: css`
    letter-spacing: 0.03em;
    font-family: 'Pretendard';
    font-size: 1.125rem;
    font-weight: 700;
    font-style: normal;
  `,
  Button_medium: css`
    letter-spacing: 0.03em;
    font-family: 'Pretendard';
    font-size: 1rem;
    font-weight: 700;
    font-style: normal;
  `,
  Button_small: css`
    letter-spacing: 0.03em;
    font-family: 'Pretendard';
    font-size: 0.875rem;
    font-weight: 700;
    font-style: normal;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
