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

  const blogAuthorRes = await getBlogAuthorDetail(team, authorIdNum);
  if (!blogAuthorRes) return null;

  const { data } = blogAuthorRes;

  return <AuthorPageTemplate authorData={data} />;
};

export default AuthorPage;
