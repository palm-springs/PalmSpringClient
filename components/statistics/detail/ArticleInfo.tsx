'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetArticlePeriod } from '@/hooks/dashboard';
import { endDateState, startDateState } from '@/recoil/atom/dashboard';

const ArticleInfo = () => {
  const { articleId } = useParams();
  const startDate = useRecoilValue(startDateState);
  const endDate = useRecoilValue(endDateState);

  const articleData = useGetArticlePeriod(Number(articleId), startDate, endDate);

  if (!articleData) return <LoadingLottie width={4} height={4} />;

  const {
    data: {
      articleInfo: { author, createdAt, thumbnail, title },
    },
  } = articleData;

  return (
    <>
      <ArticleInfoContainer>
        {thumbnail && <Thumbnail src={thumbnail} alt="게시글 썸네일" width={228} height={170} />}
        <div>
          <Title>{title}</Title>
          <Description>리액트 API와 코드 재사용의 진화에 관한 글입니다.</Description>
          <AuthorAndDate>{`${author} | ${createdAt}`}</AuthorAndDate>
        </div>
      </ArticleInfoContainer>
    </>
  );
};

export default ArticleInfo;

const ArticleInfoContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  margin-top: 2.4rem;
  padding: 0 4rem;
`;

const Thumbnail = styled(Image)`
  border: none;
  border-radius: 1.2rem;
  width: 22.8rem;
  height: 17rem;
  object-fit: cover;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.Heading2};
  margin-bottom: 0.4rem;
`;
const Description = styled.p`
  ${({ theme }) => theme.fonts.Body2_Regular};
  margin-bottom: 1rem;
`;

const AuthorAndDate = styled.p`
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;
