'use client';
import React from 'react';
import styled from 'styled-components';

const PublishBottomButtons = () => {
  return (
    <PublishBottomButtonsContainer>
      <BackButton type="button">뒤로가기</BackButton>
      <PublishButton type="button">글 발행하기</PublishButton>
    </PublishBottomButtonsContainer>
  );
};

export default PublishBottomButtons;

const PublishButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 34.3rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 1rem 2.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
  ${({ theme }) => theme.fonts.Body2_Regular};
`;

const BackButton = styled.button`
  height: 4.2rem;
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body2_Regular};
`;

const PublishBottomButtonsContainer = styled.div`
  display: flex;
  margin-top: 3.2rem;
`;