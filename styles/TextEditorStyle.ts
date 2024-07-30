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

    h2 {
      ${({ theme }) => theme.editor.Edit_h1};
      padding: 5.6rem 0 0.4rem 0;
      width: 72rem;
    }

    h3 {
      ${({ theme }) => theme.editor.Edit_h2};
      padding: 4rem 0 0.4rem 0;
      width: 72rem;
    }

    h4 {
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
      width: 72rem;
      line-height: 2.601rem;
      letter-spacing: -0.0072rem;
      font-family: 'Fira Mono' !important;
      font-size: 1.53rem;
      font-weight: 400;
      font-style: normal;
      box-decoration-break: clone;
    }

    pre {
      margin: 2.016rem 0 0.8rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.grey_100};
      padding: 1.6rem 2rem;
      width: 72rem;
      line-height: 2.601rem;
      letter-spacing: -0.0072rem;
      white-space: pre-wrap;
      word-break: break-all;
      color: #383a41;
      font-family: 'Fira Mono' !important;
      font-size: 1.4rem;
      font-weight: 400;
      code {
        background: none;
        padding: 0;
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: inherit;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-variable,
      .hljs-comment {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #383a41;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }
      .hljs-quote {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #a0a1a7;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-template-variable,
      .hljs-attribute,
      .hljs-tag,
      .hljs-regexp,
      .hljs-link,
      .hljs-name,
      .hljs-selector-id,
      .hljs-selector-class {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #986801;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-number,
      .hljs-meta,
      .hljs-literal,
      .hljs-type,
      .hljs-params {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #fbbc88;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-built_in,
      .hljs-builtin-name {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #c18401;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }
      .hljs-string {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #50a14f;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-title,
      .hljs-section,
      .hljs-symbol,
      .hljs-bullet {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #4078f2;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-keyword,
      .hljs-selector-tag {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        color: #99359f;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
      }

      .hljs-emphasis {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
        font-weight: 400;
        font-style: italic;
      }

      .hljs-strong {
        line-height: 2.601rem;
        letter-spacing: -0.0072rem;
        font-family: 'Fira Mono' !important;
        font-size: 1.4rem;
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
