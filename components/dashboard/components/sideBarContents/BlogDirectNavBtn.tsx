import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import { ArrowRightContained02Icon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const BlogDirectNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <button onClick={() => router.push(`blogdirectnav`)}>
      <SideBarContent currentPage={pageType === 'blogdirectnav'}>
        <ArrowRightContained02Icon />
        블로그 바로 가기
      </SideBarContent>
    </button>
  );
};

export default BlogDirectNavBtn;
