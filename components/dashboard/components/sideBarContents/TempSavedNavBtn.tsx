import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { File02Icon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const TempSavedNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <div onClick={() => router.push(`tempsaved`)}>
      <SideBarContent currentPage={pageType === 'tempsaved'}>
        <Image src={File02Icon} alt="밑줄 친 파일" />
        업로드된 글
      </SideBarContent>
    </div>
  );
};

export default TempSavedNavBtn;
