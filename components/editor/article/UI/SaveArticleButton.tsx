'use client';

import React from 'react';
import styled from 'styled-components';

const SaveArticleButton = () => {
  return (
    <ButtonContainer>
      <ExitButton type="button">나가기</ExitButton>
      <TemporarySaveButton>임시저장</TemporarySaveButton>
      <SaveButton>발행하기</SaveButton>
    </ButtonContainer>
  );
};

export default SaveArticleButton;

const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  margin-left: 35.9rem;
  border-top: 0.1rem solid #eee;
  background: ${({ theme }) => theme.colors.grey_0};
  width: 144rem;
  height: 6.4rem;
`;

const ExitButton = styled.button`
  color: ${({ theme }) => theme.colors.grey_900};
  font-family: ${({ theme }) => theme.fonts.Body3_Regular};
`;

const TemporarySaveButton = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-left: 48.5rem;
  padding: 1rem 2rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_900};
  font-family: ${({ theme }) => theme.fonts.Button_medium};
`;

const SaveButton = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-left: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_900};
  padding: 1rem 2rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
  font-family: ${({ theme }) => theme.fonts.Button_medium};
`;
