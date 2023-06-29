import { css, DefaultTheme } from 'styled-components';

const colors = {
  pink_700: '#C56889',
  pink_500: '#DB7499',
  pink_300: '#E088A8',
  pink_100: '#FF68AA',

  gray_100_80: '#FFFFFFCC',
  gray_100_25: '#FFFFFF40',
  gray_900_60: '#00000099',
};

const fonts = {
  Title1: css`
    line-height: 1.6rem;
    letter-spacing: 0.02em;
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-weight: 700;
    font-style: normal;
  `,
  Title2: css`
    line-height: 2rem;
    letter-spacing: -0.04em;
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-weight: 400;
    font-style: normal;
  `,
  Body1: css`
    line-height: 1.2rem;
    font-family: 'Pretendard';
    font-size: 1rem;
    font-weight: 700;
    font-style: normal;
  `,
  Body2: css`
    line-height: 1.4rem;
    letter-spacing: 0.06em;
    font-family: 'Pretendard';
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
  `,
  Body3: css`
    line-height: 1.2rem;
    font-family: 'Pretendard';
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
  `,
  Body4: css`
    line-height: 1.2rem;
    letter-spacing: -0.04em;
    font-family: 'Pretendard';
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
