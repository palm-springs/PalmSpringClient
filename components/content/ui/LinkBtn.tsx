'use client';

import React from 'react';
import styled from 'styled-components';

const LinkBtn = () => {
  return <LinkBtnContainer>아티클 링크 복사하기</LinkBtnContainer>;
};

export default LinkBtn;

const LinkBtnContainer = styled.button`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  align-items: center;
  border: none;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_200};
  padding: 0 1.4rem;
  height: 3.2rem;
  color: ${({ theme }) => theme.colors.grey_900};
`;
