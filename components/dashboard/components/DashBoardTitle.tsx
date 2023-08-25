'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { useParams } from 'next/navigation';

import { useGetBlogInfo } from '@/hooks/blog';
import { ArrowDownIcon, ArrowUpIcon, SymbolIcon } from '@/public/icons';

import SideBarTitle from './ui/SideBarTitle';

interface DashBoardTitleProps {
  isBlogOpen: boolean;
  setIsBlogListOpen: Dispatch<SetStateAction<boolean>>;
  currentBlog: number;
  setCurrentBlog: Dispatch<SetStateAction<number>>;
}

const DashBoardTitle = (props: DashBoardTitleProps) => {
  const { isBlogOpen, setIsBlogListOpen } = props;

  const { team } = useParams();

  const res = useGetBlogInfo(team ?? '');

  const title = res && res.data && res.data.name;

  return (
    <>
      <SymbolIcon />
      <SideBarTitle onBlogListSelectorClick={() => setIsBlogListOpen((prev) => !prev)}>
        {title ?? '블로그가 없어요.'}
        {!isBlogOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
      </SideBarTitle>
    </>
  );
};

export default DashBoardTitle;
