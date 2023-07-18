'use client';

import React from 'react';
import styled from 'styled-components';

const SubscribeBtn = () => {
  return <SubscribeBtnContainer>팀 소식 받아보기</SubscribeBtnContainer>;
};

export default SubscribeBtn;

const SubscribeBtnContainer = styled.button`
  ${({ theme }) => theme.fonts.Button_medium};
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_900};
  padding: 1rem 2rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_800};
  }
`;
