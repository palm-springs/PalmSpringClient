'use client';
import React from 'react';
import styled from 'styled-components';

const UrlCustom = () => {
  return (
    <UrlContainer>
      <UrlTitle>URL</UrlTitle>
      <UrlCustomTextarea defaultValue="/@sopt/content/"></UrlCustomTextarea>
    </UrlContainer>
  );
};

export default UrlCustom;

const UrlCustomTextarea = styled.textarea`
  display: inline-flex;
  align-items: flex-start;
  margin-top: 0.8rem;
  padding: 1rem 1.2rem;
  width: 54rem;
  height: 4.6rem;
  resize: none;
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_600};
  /* 기능넣을때 수정할 예정입니당. */
  &:focus {
    color: ${({ theme }) => theme.colors.grey_900};
  }
`;

const UrlContainer = styled.div`
  margin-top: 2.4rem;
`;

const UrlTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;
