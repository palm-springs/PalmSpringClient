'use client';
import React from 'react';
import styled from 'styled-components';

const UserInfoSaveButton = () => <SaveButton type="button">저장하기</SaveButton>;

export default UserInfoSaveButton;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 1rem 2rem;
  width: 9.6rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
