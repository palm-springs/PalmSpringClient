import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { Grid01Icon } from '@/public/icons';

import SideBarContent from '../ui/SideBarContent';

const CategoryNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <button onClick={() => router.push(`category`)}>
      <SideBarContent currentPage={pageType === 'category'}>
        <Grid01Icon />
        카테고리
      </SideBarContent>
    </button>
  );
};

export default CategoryNavBtn;
