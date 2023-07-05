import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import { File02Icon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const TempSavedNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <button onClick={() => router.push(`tempsaved`)}>
      <SideBarContent currentPage={pageType === 'tempsaved'}>
        <File02Icon />
        업로드된 글
      </SideBarContent>
    </button>
  );
};

export default TempSavedNavBtn;
