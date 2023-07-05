import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import { SettingIcon } from '@/public/icons';

import SideBarContent from '../ui/SideBarContent';

const BlogConfigNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <button onClick={() => router.push(`blogconfignav`)}>
      <SideBarContent currentPage={pageType === 'blogconfignav'}>
        <SettingIcon />
        블로그 설정
      </SideBarContent>
    </button>
  );
};

export default BlogConfigNavBtn;
