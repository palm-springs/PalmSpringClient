'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { useParams } from 'next/navigation';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetBlogInfo } from '@/hooks/blog';
import { ArrowDownIcon, LogoIcon, SymbolIcon } from '@/public/icons';

import BlogLogo from './ui/BlogLogo';
import SideBarTitle from './ui/SideBarTitle';

interface DashBoardTitleProps {
  setIsBlogListOpen: Dispatch<SetStateAction<boolean>>;
  currentBlog: number;
  setCurrentBlog: Dispatch<SetStateAction<number>>;
}

const DashBoardTitle = (props: DashBoardTitleProps) => {
  const { setIsBlogListOpen } = props;

  const { team } = useParams();

  const res = useGetBlogInfo(team);

  if (!res) return <SymbolIcon />;

  const {
    data: { name },
  } = res;

  return (
    <>
      <SymbolIcon />
      <SideBarTitle>
        {name}
        <button type="button" onClick={() => setIsBlogListOpen((prev) => !prev)}>
          <ArrowDownIcon />
        </button>
      </SideBarTitle>
    </>
  );
};

export default DashBoardTitle;
