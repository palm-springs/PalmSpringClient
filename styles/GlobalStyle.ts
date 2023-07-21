import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;
    color: inherit;
  }

  .ProseMirror {
    position: absolute;
    
    p {
      ${({ theme }) => theme.fonts.Body1_Regular};
      padding: 2.4rem 0 0.8rem 0;
      
      &::placeholder{
      color: ${({ theme }) => theme.colors.grey_600};;
    }
    }

    h1 {
      ${({ theme }) => theme.editor.Edit_h1};
      padding: 5.6rem 0 0.4rem 0;
    }

    h2 {
      ${({ theme }) => theme.editor.Edit_h2};
      padding: 4rem 0 0.4rem 0;
    }

    h3 {
      ${({ theme }) => theme.editor.Edit_h3};
      padding-top: 2.4rem 0 0.4rem 0;
    }

    ul {
      margin-left: 4rem;
      list-style-type: disc;
    }

    ol {
      margin-left: 4rem;
      list-style-type: decimal;
    }

    u {
      text-decoration: underline;
    }

    strong {
      ${({ theme }) => theme.fonts.Body1_Semibold};
    }

    s {
      text-decoration: line-through;
    }

    em {
      font-style: italic;
    }

    code {
      border-radius: 0.25em;
      background-color: ${({ theme }) => theme.colors.grey_200};
      padding: 0.3rem 0.6rem;
      box-decoration-break: clone;
    }

    pre {
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.grey_100};
      padding: 0.75rem 1rem;
      color: #383A41;
      font-family: "Fira Mono", monospace;

      code {
        background: none;
        padding: 0;
        color: inherit;
        font-size: 1.4rem;
      }
     
      .hljs-quote,
      .hljs-variable {
        color: #383A41;
      }

      .hljs-comment{
        color: #a0a1a7;
      }

      .hljs-attribute,
      .hljs-template-variable,
      .hljs-name,
      .hljs-number,
      .hljs-selector-class {
        color: #986801;
      }

      .hljs-regexp,
      .hljs-selector-id,
      .hljs-link,
      .hljs-meta {
        text-decoration: underline;
        color: #4078f2;
      }

      .hljs-literal {
        color: #0184bb;
      }

      .hljs-built_in,
      .hljs-builtin-name {
        color: #c18401;
      }

      .hljs-string {
        color: #50a14f;
      }

      .hljs-title,
      .hljs-symbol,
      .hljs-bullet {
        color: #4078f2;
      }

      .hljs-section {
        color: #e45649;
      }

      .hljs-selector-tag,
      .hljs-type,
      .hljs-params,
      .hljs-keyword,
      .hljs-tag {
        color: #a626a4;
      }

      .hljs-emphasis {
        font-style: italic;
      }

      .hljs-strong {
        font-weight: 700;
      }
    }

    blockquote {
      margin: 2.4rem 0 0.8rem 0;
      border-left: 2px solid ${({ theme }) => theme.colors.grey_900};
      padding-left: 1.8rem;
      height: 100%;

      p {
        padding-top: 0.2rem;
      }
    }

    img {
      margin-top: 2.4rem 0 0.8rem 0;
      width: 72.2rem;
      height: auto;

      &.ProseMirror-selectednode {
        outline: 3px solid #68cef8;
      }
    }

    a {
      border-bottom: 0.8px solid ${({ theme }) => theme.colors.grey_700};
      text-decoration: none;
      color: ${({ theme }) => theme.colors.grey_700};
    }
  }

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
}

*::-webkit-scrollbar {
    display: none;
}
`;
