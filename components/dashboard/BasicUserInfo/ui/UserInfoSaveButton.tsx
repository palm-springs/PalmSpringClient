'use client';
import React from 'react';
import styled from 'styled-components';

const UserInfoSaveButton = () => <SaveButton type="button">저장하기</SaveButton>;

export default UserInfoSaveButton;

const SaveButton = styled.button`
  ${({ theme }) => theme.fonts.Button_medium};
  display: flex;
  position: absolute;
  top: 6.8rem;
  left: 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-left: 104.1rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 1rem 2rem;
  width: 9.6rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
