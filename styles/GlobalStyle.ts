import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
.ProseMirror p {
    ${({ theme }) => theme.fonts.Body1_Regular};
    padding: 2.4rem 0 0.8rem 0;
}
.ProseMirror h1{
    ${({ theme }) => theme.editor.Edit_h1};
    padding:5.6rem 0 0.4rem 0;

}
.ProseMirror h2{
    ${({ theme }) => theme.editor.Edit_h2};
    padding:4rem 0 0.4rem 0;
}
.ProseMirror h3{
    ${({ theme }) => theme.editor.Edit_h3};
    padding-top:2.4rem 0 0.4rem 0;
}
.ProseMirror ul{
   margin-left: 4rem;
   list-style-type: disc;
}
.ProseMirror ol{
    margin-left: 4rem;
    list-style-type: decimal;

}
.ProseMirror u{
    text-decoration: underline;
}

.ProseMirror strong{
    ${({ theme }) => theme.fonts.Body1_Semibold};
}

.ProseMirror s{
    text-decoration: line-through;
}

.ProseMirror em{
    font-style: italic;
}

.ProseMirror code{
    border-radius: 0.25em;
    background-color: ${({ theme }) => theme.colors.grey_200};;
    padding: 0.3rem 0.6rem;
    box-decoration-break: clone;
}

.ProseMirror pre {
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.grey_100};
    padding: 0.75rem 1rem;
    color: #383A41;
    font-family: "Fira Mono", monospace;

    code {
      background: none;
      padding: 0;
      color: inherit;
      font-size: 0.8rem;
    }

    .hljs-variable{
        color: #383A41;
    }

    .hljs-comment,
    .hljs-quote {
        color:#a0a1a7;
        font-style:italic;
    }

    .hljs-attribute,
    .hljs-template-variable,
    .hljs-name,
    .hljs-number,
    .hljs-selector-class {
        color:#986801;
    }

    .hljs-regexp,
    .hljs-selector-id,
    .hljs-link,
    .hljs-meta {
        text-decoration:underline;
        color:#4078f2;
    }

    .hljs-literal{
        color:#0184bb;
    }


    .hljs-built_in,
    .hljs-builtin-name {
      color: #c18401;
    }

    .hljs-string{
        color:#50a14f
    }

    .hljs-title,
    .hljs-symbol,
    .hljs-bullet {
      color:#4078f2;
    }

    .hljs-section {
      color: #e45649;
    }

    .hljs-selector-tag,
    .hljs-type,
    .hljs-params,
    .hljs-keyword,
    .hljs-tag{
        color:#a626a4
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: 700;
    }
 
}

.ProseMirror blockquote {
    margin: 2.4rem 0 0.8rem 0;
    border-left: 2px solid ${({ theme }) => theme.colors.grey_900};
    padding-left: 1.8rem;
    height: 100%;
    p{
        padding-top: 0.2rem;
    }
  }


#root, body, html {
    margin: 0 auto;
    width:100%;
    height: 100vh;
}

html {
    font-size: 62.5%;
}
a {
    text-decoration: none;
    
    color: inherit;
}

button { 
    border:none; 
    border-radius:0; 
    box-shadow:none;
    background: inherit ;
    cursor:pointer; 
    padding:0; 
    overflow:visible;
}

`;
