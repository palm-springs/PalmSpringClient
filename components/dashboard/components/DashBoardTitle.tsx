'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { useGetBlogInfo } from '@/hooks/blog';
import { ArrowDownIcon, SymbolIcon } from '@/public/icons';

import SideBarTitle from './ui/SideBarTitle';

interface DashBoardTitleProps {
  setIsBlogListOpen: Dispatch<SetStateAction<boolean>>;
  currentBlog: number;
  setCurrentBlog: Dispatch<SetStateAction<number>>;
}

const DashBoardTitle = (props: DashBoardTitleProps) => {
  const { setIsBlogListOpen } = props;

  const { team } = useParams();

  const res = useGetBlogInfo(team ?? '');

  const title = res?.data.name;

  return (
    <>
      <SymbolIcon />
      <SideBarTitle>
        {title ?? '블로그가 없어요.'}
        <button type="button" onClick={() => setIsBlogListOpen((prev) => !prev)}>
          <ArrowDownIcon />
        </button>
      </SideBarTitle>
    </>
  );
};

export default DashBoardTitle;
