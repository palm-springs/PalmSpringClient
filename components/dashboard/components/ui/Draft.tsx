'use client';

import React from 'react';
import { styled } from 'styled-components';

interface DraftProps {
  draft: boolean | '상태';
}

const Draft = (props: DraftProps) => {
  const { draft } = props;

  if (typeof draft === 'string') {
    return <DraftUI>상태</DraftUI>;
  }
  return (
    <DraftUI $draft={draft}>
      <span>{draft ? '임시 저장' : '업로드 완료'}</span>
    </DraftUI>
  );
};

export default Draft;

const DraftUI = styled.div<{ $draft?: boolean }>`
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  margin-right: 2rem;
  width: 13rem;
  overflow: hidden;
  span {
    border: 1px solid ${({ theme, $draft }) => ($draft ? theme.colors.grey_700 : theme.colors.dark_green)};
    border-radius: 2rem;
    background: none;
    padding: 0.4rem 0.8rem;
    max-width: 8rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ theme, $draft }) => ($draft ? theme.colors.grey_700 : theme.colors.dark_green)};
  }
`;
