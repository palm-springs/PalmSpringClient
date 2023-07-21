// 글쓴이 별 페이지
import React from 'react';
import { useParams } from 'next/navigation';

import { getAuthor } from '@/api/author';
import AuthorPageTemplate from '@/components/author/AuthorPageTemplate';

const AuthorPage = async () => {
  const { team, authorId } = useParams();
  const { data: authorData } = await getAuthor(team, authorId);

  return <AuthorPageTemplate authorData={authorData} />;
};

export default AuthorPage;
