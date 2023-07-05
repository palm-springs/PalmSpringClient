import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { ArrowRightContained02Icon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const BlogDirectNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <div onClick={() => router.push(`blogdirectnav`)}>
      <SideBarContent currentPage={pageType === 'blogdirectnav'}>
        <Image src={ArrowRightContained02Icon} alt="블로그 바로 가기" />
        블로그 바로 가기
      </SideBarContent>
    </div>
  );
};

export default BlogDirectNavBtn;
