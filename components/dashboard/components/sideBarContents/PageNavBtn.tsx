import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { File04Icon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const PageNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <div onClick={() => router.push(`page`)}>
      <SideBarContent currentPage={pageType === 'page'}>
        <Image src={File04Icon} alt="페이지" />
        페이지
      </SideBarContent>
    </div>
  );
};

export default PageNavBtn;
