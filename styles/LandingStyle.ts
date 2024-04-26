import { createGlobalStyle } from 'styled-components';

export const LandingStyle = createGlobalStyle`

@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    word-break: keep-all;
    font-family:'Pretendard',sans-serif;
}

body{
    margin:0;
    padding:0;
    font-size:16px;
}

a {
    text-decoration: none;
    color: inherit;
}`;
