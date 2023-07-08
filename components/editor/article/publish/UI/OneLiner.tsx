'use-client';

import React from 'react';
import styled from 'styled-components';

const OneLiner = () => {
  return (
    <OneLinerContainer>
      <OneLineTitle>한 줄 소개</OneLineTitle>
      <OneLinerTextarea placeholder="한 줄 소개를 입력해주세요"></OneLinerTextarea>
    </OneLinerContainer>
  );
};

export default OneLiner;

const OneLinerTextarea = styled.textarea`
  display: flex;
  align-items: flex-start;
  margin-top: 0.8rem;
  padding: 1rem 1.2rem 5rem 1.2rem;
  width: 54rem;
  resize: none;
  ${({ theme }) => theme.fonts.Body2_Regular};
  &::placeholder {
    ${({ theme }) => theme.colors.grey_600};
    ${({ theme }) => theme.fonts.Body2_Regular};
  }
`;

const OneLinerContainer = styled.div`
  margin-top: 2.4rem;
`;

const OneLineTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;
