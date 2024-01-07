'use client';
import React, { Dispatch, RefObject, SetStateAction } from 'react';
import styled from 'styled-components';

import { ArrowDownIcon, ArrowUpIcon, SymbolIcon } from '@/public/icons';

import SideBarTitle from './ui/SideBarTitle';

interface DashBoardTitleProps {
  isBlogOpen: boolean;
  setIsBlogListOpen: Dispatch<SetStateAction<boolean>>;
  currentBlog: number;
  setCurrentBlog: Dispatch<SetStateAction<number>>;
  titleRef: RefObject<HTMLDivElement>;
}

const DashBoardNoTeamTitle = (props: DashBoardTitleProps) => {
  const { isBlogOpen, setIsBlogListOpen, titleRef } = props;

  return (
    <>
      <SymbolIcon />
      <TitleContainer ref={titleRef}>
        <SideBarTitle onBlogListSelectorClick={() => setIsBlogListOpen((prev) => !prev)}>
          블로그가 없어요.
          {!isBlogOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </SideBarTitle>
      </TitleContainer>
    </>
  );
};

export default DashBoardNoTeamTitle;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 7.46rem;
`;
