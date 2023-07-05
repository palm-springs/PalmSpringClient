import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { UserProfile03Icon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const MemberNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <div onClick={() => router.push(`member`)}>
      <SideBarContent currentPage={pageType === 'member'}>
        <Image src={UserProfile03Icon} alt="빈 파일" />
        팀원
      </SideBarContent>
    </div>
  );
};

export default MemberNavBtn;
