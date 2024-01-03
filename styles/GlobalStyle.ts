import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  #root,
  body,
  html{
    margin: 0 auto;
    width: 100%;
    height: 100vh; 
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
