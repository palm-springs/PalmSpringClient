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
  return <DraftUI $draft={!draft}>{!draft ? '업로드 완료' : '임시저장'}</DraftUI>;
};

export default Draft;

const DraftUI = styled.span<{ $draft?: boolean }>`
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  margin-right: 2rem;
  border: 1px solid ${({ theme, $draft }) => ($draft ? theme.colors.dark_green : theme.colors.grey_700)};
  ${({ theme }) => theme.fonts.Body3_Regular};
  border-radius: 2rem;
  padding: 0.4rem 0.8rem;
  width: 8.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme, $draft }) => ($draft ? theme.colors.dark_green : theme.colors.grey_700)};
`;
