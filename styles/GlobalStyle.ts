import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  #root,
  body,
  html {
    margin: 0 auto;
    width: 100%;
    height: 100vh;
  }

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

*::-webkit-scrollbar {
    display: none;
}

a {
        text-decoration: none;
        color: inherit;
      }

*::marker {
	font-size: 1.8rem;
}
`;
