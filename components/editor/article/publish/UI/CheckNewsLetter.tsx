'use client';
import React from 'react';
import styled from 'styled-components';

import { CheckboxIcon } from '@/public/icons';

const CheckNewsLetter = () => {
  return (
    <div>
      <CheckNewsLetterContainer>
        <CheckboxIcon />
        <CheckNewsLetterTitle>뉴스레터 보내기</CheckNewsLetterTitle>
      </CheckNewsLetterContainer>
    </div>
  );
};

export default CheckNewsLetter;

const CheckNewsLetterTitle = styled.p`
  margin: -0.15rem 0 0 0.4rem;
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;

const CheckNewsLetterContainer = styled.div`
  display: flex;
  margin-top: 2.4rem;
`;
