'use client';

import { styled } from 'styled-components';

export const TextEditorStyle = styled.div`
  .ProseMirror {
    margin: 4rem auto 0;
    width: 72.2rem;
    * {
      word-wrap: break-word;
    }

    p {
      ${({ theme }) => theme.fonts.Body1_Regular};
      padding-bottom: 0.8rem;
      width: 72rem;
    }

    h1 {
      ${({ theme }) => theme.editor.Edit_h1};
      padding: 5.6rem 0 0.4rem 0;
      width: 72rem;
    }

    h2 {
      ${({ theme }) => theme.editor.Edit_h2};
      padding: 4rem 0 0.4rem 0;
      width: 72rem;
    }

    h3 {
      ${({ theme }) => theme.editor.Edit_h3};
      padding: 2.4rem 0 0.4rem;
      width: 72rem;
    }

    ul {
      margin-left: 4rem;
      width: 72rem;
      list-style-type: disc;
    }

    ol {
      margin-left: 4rem;
      width: 72rem;
      list-style-type: decimal;
    }

    u {
      width: 72rem;
      text-decoration: underline;
    }

    hr {
      border: 1px solid ${({ theme }) => theme.colors.grey_300};
      width: 100%;
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
      width: 72rem;
    }

    pre {
      margin: 2.016rem 0 0.8rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.grey_100};
      padding: 1.6rem 2rem;
      width: 72rem;

      white-space: pre-wrap;
      word-break: break-all;
      color: #383a41;
      font-family: 'Fira Mono', monospace;
      code {
        background: none;
        padding: 0;
        color: inherit;
        font-size: 1.4rem;
      }

      .hljs-quote,
      .hljs-variable {
        color: #383a41;
      }

      .hljs-comment {
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

      p {
        padding-top: 0.2rem;
      }
    }

    img {
      margin-top: 2.4rem 0 0.8rem 0;
      border-radius: 16px;
      width: 100%;
      height: auto;

      &.ProseMirror-selectednode {
        border: 2px solid ${({ theme }) => theme.colors.green};
        border-radius: 16px;
      }
    }

    a {
      border-bottom: 0.8px solid ${({ theme }) => theme.colors.grey_700};
      text-decoration: none;
      color: ${({ theme }) => theme.colors.grey_700};
    }
  }

  &.editor > .ProseMirror {
    * {
      font-family: sans-serif;
    }
  }
`;
