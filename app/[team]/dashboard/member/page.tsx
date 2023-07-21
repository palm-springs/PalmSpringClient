//대시보드 팀원 페이지
import React from 'react';
import { useParams } from 'next/navigation';

import { getMemberList } from '@/api/dashboard';
import MemberTemplate from '@/components/dashboard/member/ui/MemberTemplate';

const Page = async () => {
  const { team } = useParams();
  const { data: memberListData } = await getMemberList(team);
  return <MemberTemplate memberListData={memberListData} />;
};

export default Page;
