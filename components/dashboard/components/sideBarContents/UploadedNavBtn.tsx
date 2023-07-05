import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { File02Icon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const UploadedNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <div onClick={() => router.push(`upload`)}>
      <SideBarContent currentPage={pageType === 'upload'}>
        <Image src={File02Icon} alt="밑줄 친 파일" />
        업로드된 글
      </SideBarContent>
    </div>
  );
};

export default UploadedNavBtn;
