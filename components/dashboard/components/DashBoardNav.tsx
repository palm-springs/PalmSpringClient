'use client';

import React from 'react';
import { styled } from 'styled-components';

import DashBoardTitle from './DashBoardTitle';
import {
  BlogConfigNavBtn,
  BlogDirectNavBtn,
  CategoryNavBtn,
  MemberNavBtn,
  NavigationNavBtn,
  PageNavBtn,
  SubscriberNavBtn,
  TempSavedNavBtn,
  UploadedNavBtn,
} from './sideBarContents';

const DashBoardNav = () => {
  return (
    <DashBoardNavContainer>
      <DashBoardTitle />
      <UploadedNavBtn />
      <TempSavedNavBtn />
      <Line />
      <PageNavBtn />
      <CategoryNavBtn />
      <NavigationNavBtn />
      <Line />
      <MemberNavBtn />
      <SubscriberNavBtn />
      <Line />
      <BlogDirectNavBtn />
      <BlogConfigNavBtn />
      <DashBoardNavBtn>새 글 작성하기</DashBoardNavBtn>
    </DashBoardNavContainer>
  );
};

export default DashBoardNav;

const DashBoardNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  background: ${({ theme }) => theme.colors.grey_100};
  padding-top: 2rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  width: 17.875rem;
  height: 100vh;
  & > :nth-child(1) {
    align-self: flex-start;
    margin-left: 1rem;
  }
`;

const Line = styled.div`
  margin-bottom: 0.5rem;
  background: ${({ theme }) => theme.colors.grey_300};
  width: 100%;
  height: 1px;
`;

const DashBoardNavBtn = styled.button`
  position: absolute;
  bottom: 1.5rem;
  flex-shrink: 0;
  ${({ theme }) => theme.fonts.Body2_Regular};
  border: none;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.green};
  width: 15.875rem;
  height: 2.25rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
