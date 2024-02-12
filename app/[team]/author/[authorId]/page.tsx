// 글쓴이 별 페이지
import React from 'react';

import { getBlogAuthorDetail } from '@/api/blogHome';
import AuthorPageTemplate from '@/components/author/AuthorPageTemplate';

type Props = {
  params: { team: string; authorId: string };
};

const AuthorPage = async ({ params }: Props) => {
  const team = params.team;
  const authorIdNum = Number(params.authorId);

  const res = await getBlogAuthorDetail(team, authorIdNum);
  if (!res) return null;

  const { data } = res;

  return <AuthorPageTemplate authorData={data} />;
};

export default AuthorPage;
