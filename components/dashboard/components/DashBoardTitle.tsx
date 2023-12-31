'use client';
import React, { Dispatch, RefObject, SetStateAction } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetBlogInfo } from '@/hooks/blog';
import { ArrowDownIcon, ArrowUpIcon, SymbolIcon } from '@/public/icons';

import SideBarTitle from './ui/SideBarTitle';

interface DashBoardTitleProps {
  isBlogOpen: boolean;
  setIsBlogListOpen: Dispatch<SetStateAction<boolean>>;
  currentBlog: number;
  setCurrentBlog: Dispatch<SetStateAction<number>>;
  titleRef: RefObject<HTMLDivElement>;
}

const DashBoardTitle = (props: DashBoardTitleProps) => {
  const { isBlogOpen, setIsBlogListOpen, titleRef } = props;

  const { team } = useParams();

  const res = useGetBlogInfo(team ?? '');

  const title = res && res.data && res.data.name;

  return (
    <>
      <SymbolIcon />
      <TitleContainer ref={titleRef}>
        {res?.data ? (
          <SideBarTitle onBlogListSelectorClick={() => setIsBlogListOpen((prev) => !prev)}>
            {title}
            {!isBlogOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </SideBarTitle>
        ) : (
          <LoadingLottie height={4} width={4} fit={false} />
        )}
      </TitleContainer>
    </>
  );
};

export default DashBoardTitle;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 7.46rem;
`;
