import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
#root, body, html {
    margin: 0 auto;
    width:100%;
    height: 100vh;
}

a {
    text-decoration: none;
    
    color: inherit;
}

* {
    box-sizing: border-box;
}`;
