'use client';

import React from 'react';
import { styled } from 'styled-components';

interface DraftProps {
  draft: boolean;
}

const Draft = (props: DraftProps) => {
  const { draft } = props;

  return <DraftUI $draft={!draft}>{!draft ? '업로드 완료' : '임시저장'}</DraftUI>;
};

export default Draft;

const DraftUI = styled.span<{ $draft: boolean }>`
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  margin-right: ${({ $draft }) => ($draft ? '2vw' : 'calc(2vw + 1.5rem)')};
  border: 1px solid ${({ theme, $draft }) => ($draft ? theme.colors.dark_green : theme.colors.grey_700)};
  ${({ theme }) => theme.fonts.Body3_Regular};
  border-radius: 2rem;
  padding: 0.4rem 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme, $draft }) => ($draft ? theme.colors.dark_green : theme.colors.grey_700)};
`;
