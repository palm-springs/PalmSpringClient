import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { Grid01Icon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const CategoryNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <div onClick={() => router.push(`category`)}>
      <SideBarContent currentPage={pageType === 'category'}>
        <Image src={Grid01Icon} alt="카테고리" />
        카테고리
      </SideBarContent>
    </div>
  );
};

export default CategoryNavBtn;
