import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import { File04Icon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const PageNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <button onClick={() => router.push(`page`)}>
      <SideBarContent currentPage={pageType === 'page'}>
        <File04Icon />
        페이지
      </SideBarContent>
    </button>
  );
};

export default PageNavBtn;
