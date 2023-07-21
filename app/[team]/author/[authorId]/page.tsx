// 글쓴이 별 페이지
'use client';
import React from 'react';
import { useParams } from 'next/navigation';

import AuthorPageTemplate from '@/components/author/AuthorPageTemplate';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetAuthorInfo } from '@/hooks/author';

const AuthorPage = () => {
  const { authorId } = useParams();
  const authorIdNum = Number(authorId);
  const res = useGetAuthorInfo(authorIdNum);

  if (!res) return <LoadingLottie width={10} height={10} fit />;

  const { data } = res;

  return <AuthorPageTemplate authorData={data} />;
};

export default AuthorPage;
