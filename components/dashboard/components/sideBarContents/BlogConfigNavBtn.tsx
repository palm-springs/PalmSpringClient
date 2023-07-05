import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { SettingIcon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const BlogConfigNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <div onClick={() => router.push(`blogconfignav`)}>
      <SideBarContent currentPage={pageType === 'blogconfignav'}>
        <Image src={SettingIcon} alt="블로그 설정" />
        블로그 설정
      </SideBarContent>
    </div>
  );
};

export default BlogConfigNavBtn;
