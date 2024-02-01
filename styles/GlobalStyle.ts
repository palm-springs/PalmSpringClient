import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Pretendard';
  font-weight: 100;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.eot?#iefix') format('embedded-opentype'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 200;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.eot?#iefix')
      format('embedded-opentype'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraLight.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 300;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.eot?#iefix')
      format('embedded-opentype'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 400;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot?#iefix')
      format('embedded-opentype'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 500;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot?#iefix')
      format('embedded-opentype'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 600;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot?#iefix')
      format('embedded-opentype'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 700;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot?#iefix') format('embedded-opentype'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 800;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.eot?#iefix')
      format('embedded-opentype'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 900;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.eot');
  src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.eot?#iefix')
      format('embedded-opentype'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Black.ttf') format('truetype');
  font-display: swap;
}
  
  ${reset}
  #root,
  body,
  html{
    margin: 0 auto;
    width: 100%;
    height: 100vh; 
    font-family: 'Pretendard', sans-serif;
  }
  
  /* .scroll::-webkit-scrollbar {
  display: none;
  } */

  /* body::-webkit-scrollbar {
      display: block;
      width: 100vw;
      height: 10px;
    }
  body::-webkit-scrollbar-thumb {
      border: 2px solid transparent;
      border-radius: 10px;
      background-clip: padding-box;
      background-color: #2f3542;
  }
  body::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
      background-color: grey;
  } */

  html {
    font-size: 62.5%;
  }

  button {
    border: none;
    border-radius: 0;
    box-shadow: none;
    background: inherit;
    cursor: pointer;
    padding: 0;
    overflow: visible;
  }

  * {
    box-sizing: border-box;
    word-break: keep-all;
  }

  code {
    overflow-x: scroll;
    line-height: 1.5;
    * {
      white-space: normal;
      word-break: normal;
    }
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

*::marker {
	font-size: 1.8rem;
}
`;
