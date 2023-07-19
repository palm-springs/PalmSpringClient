'use-client';

import React from 'react';
import styled from 'styled-components';

import { EssentialCircleIcon } from '@/public/icons';

const OneLiner = () => {
  return (
    <OneLinerContainer>
      <OneLineTitleContainer>
        <OneLineTitle>한 줄 소개</OneLineTitle>
        <EssentialCircleIcon />
      </OneLineTitleContainer>

      <OneLinerTextarea placeholder="한 줄 소개를 입력해주세요"></OneLinerTextarea>
    </OneLinerContainer>
  );
};

export default OneLiner;

const OneLineTitleContainer = styled.div`
  display: flex;
`;

const OneLinerTextarea = styled.textarea`
  ${({ theme }) => theme.fonts.Body2_Regular};
  display: flex;
  margin-top: 0.8rem;
  outline-color: ${({ theme }) => theme.colors.grey_700};
  border: 1px solid ${({ theme }) => theme.colors.grey_700};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem 5rem;
  width: 54rem;
  resize: none;
  &::placeholder {
    ${({ theme }) => theme.colors.grey_600};
    ${({ theme }) => theme.fonts.Body2_Regular};
  }
`;

const OneLinerContainer = styled.div`
  margin-top: 2.4rem;
`;

const OneLineTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;
