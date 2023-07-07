'use client';

import React from 'react';
import styled from 'styled-components';

const AddMemberBtn = () => {
  return <AddMemberBtnContainer type="button">새 팀원 추가하기</AddMemberBtnContainer>;
};

export default AddMemberBtn;

const AddMemberBtnContainer = styled.button`
  ${({ theme }) => theme.fonts.Body1_Semibold};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 1.2rem 2.6rem;
  height: 4.2rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
