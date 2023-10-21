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

  dimmed: '#40474F',
  navItem_hover: 'rgba(173, 181, 189, 0.20)',

  green: '#19DB7B',
  green_hover: '#17C56F',
  dark_green: '#1A9B6F',
  blue: '#2F4CA9',
  background_green: 'rgba(25, 219, 123, 0.30)',

  red: '#FF5454',
  red_hover: '#D45858',
  background_red: 'rgba(255, 84, 84, 0.30)',
  red_alpha_20: 'rgba(255, 84, 84, 0.30)',
};

const fonts = {
  Title: css`
    line-height: 140%;
    letter-spacing: -0.03125em;
    font-family: 'Pretendard';
    font-size: 4.8rem;
    font-weight: 700;
    font-style: normal;
  `,
  Heading1: css`
    line-height: 140%;
    letter-spacing: -0.02em;
    font-family: 'Pretendard';
    font-size: 3.2rem;
    font-weight: 700;
    font-style: normal;
  `,
  Heading2: css`
    line-height: 140%;
    letter-spacing: -0.0175em;
    font-family: 'Pretendard';
    font-size: 2.8rem;
    font-weight: 700;
    font-style: normal;
  `,
  Heading3_Semibold: css`
    line-height: 140%;
    letter-spacing: -0.0175em;
    font-family: 'Pretendard';
    font-size: 2.4rem;
    font-weight: 600;
    font-style: normal;
  `,
  Heading3_Regular: css`
    line-height: 140%;
    letter-spacing: -0.0175em;
    font-family: 'Pretendard';
    font-size: 2.4rem;
    font-weight: 400;
    font-style: normal;
  `,

  Body1_Semibold: css`
    line-height: 170%;
    letter-spacing: -0.00375em;
    font-family: 'Pretendard';
    font-size: 1.8rem;
    font-weight: 600;
    font-style: normal;
  `,
  Body1_Regular: css`
    line-height: 170%;
    letter-spacing: -0.00375em;
    font-family: 'Pretendard';
    font-size: 1.8rem;
    font-weight: 400;
    font-style: normal;
  `,
  Body2_Semibold: css`
    line-height: 160%;
    letter-spacing: -0.003125em;
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-weight: 600;
    font-style: normal;
  `,
  Body2_Regular: css`
    line-height: 160%;
    letter-spacing: -0.003125em;
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-weight: 400;
    font-style: normal;
  `,
  Body3_Semibold: css`
    letter-spacing: -0.0025em;
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-weight: 600;
    font-style: normal;
  `,
  Body3_Regular: css`
    letter-spacing: -0.0025em;
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-weight: 400;
    font-style: normal;
  `,
  Caption: css`
    letter-spacing: 0em;
    font-family: 'Pretendard';
    font-size: 1.2rem;
    font-weight: 500;
    font-style: normal;
  `,
  Button_large: css`
    letter-spacing: -0.0025em;
    font-family: 'Pretendard';
    font-size: 1.8rem;
    font-weight: 700;
    font-style: normal;
  `,

  Button_medium: css`
    letter-spacing: -0.003125em;
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-weight: 700;
    font-style: normal;
  `,
  Button_small: css`
    letter-spacing: -0.00375em;
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-weight: 700;
    font-style: normal;
  `,
};

const editor = {
  Edit_h1: css`
    line-height: 140%;
    letter-spacing: -0.032rem;
    font-family: 'Pretendard';
    font-size: 4rem;
    font-weight: 700;
    font-style: normal;
  `,
  Edit_h2: css`
    line-height: 155%;
    letter-spacing: -0.028rem;
    font-family: 'Pretendard';
    font-size: 3.2rem;
    font-weight: 700;
    font-style: normal;
  `,
  Edit_h3: css`
    line-height: 160%;
    letter-spacing: -0.028rem;
    font-family: 'Pretendard';
    font-size: 2.4rem;
    font-weight: 700;
    font-style: normal;
  `,
};

const mobileFonts = {
  Title1: css`
    line-height: 130%;
    letter-spacing: -0.00375em;
    font-family: 'Pretendard';
    font-size: 2.8rem;
    font-weight: 700;
    font-style: normal;
  `,
  Title2: css`
    line-height: 130%;
    letter-spacing: -0.00375em;
    font-family: 'Pretendard';
    font-size: 2.2rem;
    font-weight: 700;
    font-style: normal;
  `,
  Title3: css`
    line-height: 155%;
    letter-spacing: -0.0175em;
    font-family: 'Pretendard';
    font-size: 2rem;
    font-weight: 600;
    font-style: normal;
  `,
  Body1_Semibold: css`
    line-height: 170%;
    letter-spacing: -0.00375em;
    font-family: 'Pretendard';
    font-size: 1.7rem;
    font-weight: 600;
    font-style: normal;
  `,
  Body1_Regular: css`
    line-height: 170%;
    letter-spacing: -0.00375em;
    font-family: 'Pretendard';
    font-size: 1.7rem;
    font-weight: 400;
    font-style: normal;
  `,
  Body2_Semibold: css`
    line-height: 160%;
    letter-spacing: -0.003125em;
    font-family: 'Pretendard';
    font-size: 1.5rem;
    font-weight: 600;
    font-style: normal;
  `,
  Body2_Regular: css`
    line-height: 160%;
    letter-spacing: -0.003125em;
    font-family: 'Pretendard';
    font-size: 1.5rem;
    font-weight: 400;
    font-style: normal;
  `,
  Caption: css`
    letter-spacing: 0em;
    font-family: 'Pretendard';
    font-size: 1.3rem;
    font-weight: 400;
    font-style: normal;
  `,
  Button: css`
    letter-spacing: -0.0025em;
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-weight: 700;
    font-style: normal;
  `,
  Markdown_H1: css`
    line-height: 140%;
    letter-spacing: -0.02em;
    font-family: 'Pretendard';
    font-size: 2.6rem;
    font-weight: 700;
    font-style: normal;
  `,
  Markdown_H2: css`
    line-height: 155%;
    letter-spacing: -0.0175em;
    font-family: 'Pretendard';
    font-size: 2.4rem;
    font-weight: 700;
    font-style: normal;
  `,
  Markdown_H3: css`
    line-height: 155%;
    letter-spacing: -0.0175em;
    font-family: 'Pretendard';
    font-size: 2rem;
    font-weight: 700;
    font-style: normal;
  `,
  Code: css`
    line-height: 100%;
    letter-spacing: 0em;
    font-family: 'Pretendard';
    font-size: 1.4em;
    font-weight: 400;
    font-style: normal;
  `,
};

const theme: Pick<DefaultTheme, 'colors' | 'fonts' | 'editor' | 'mobileFonts'> = {
  colors,
  fonts,
  editor,
  mobileFonts,
};
export default theme;
