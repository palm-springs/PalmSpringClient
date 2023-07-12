'use client';

import React from 'react';
import styled from 'styled-components';

const PopOver = () => {
  return (
    <PopOverContainer>
      <PopOverText>팀원이 쓴 글로 이동하기</PopOverText>
      <PopOverText className="red">팀에서 제외하기</PopOverText>
    </PopOverContainer>
  );
};

export default PopOver;

const PopOverContainer = styled.div`
  display: flex;
  position: absolute;
  top: 5.2rem;
  right: 0;

  flex-direction: column;
  gap: 2rem;
  z-index: 5;

  border: 1px solid ${({ theme }) => theme.colors.grey_500};
  border-radius: 0.8rem;

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 2rem 2.4rem;
  width: fit-content;
`;

const PopOverText = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_900};

  &.red {
    color: ${({ theme }) => theme.colors.red};
  }
`;
