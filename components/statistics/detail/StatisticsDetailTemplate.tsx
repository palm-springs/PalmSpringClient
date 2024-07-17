'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetArticlePeriod } from '@/hooks/dashboard';
import { ArrowLeftIcon } from '@/public/icons';
import { endDateState, startDateState } from '@/recoil/atom/dashboard';

import ArticleInfo from './ArticleInfo';
import ArticleStatistic from './ArticleStatistic';

const StatisticsDetailTemplate = () => {
  const { team, articleId } = useParams();
  const startDate = useRecoilValue(startDateState);
  const endDate = useRecoilValue(endDateState);
  const articleData = useGetArticlePeriod(Number(articleId), startDate, endDate);

  // article 상세 통계 데이터 불러오기
  return (
    <StatisticsDetailContainer>
      <Link href={`/${team}/dashboard/statistics`}>
        <LinkContainer>
          <ArrowLeftIcon />
          통계 홈으로 이동
        </LinkContainer>
      </Link>
      {articleData ? (
        <>
          <ArticleInfo {...articleData.data.articleInfo} />
          <ArticleStatistic articleData={articleData.data} />
        </>
      ) : (
        <LoadingLottie width={4} height={4} />
      )}
    </StatisticsDetailContainer>
  );
};

export default StatisticsDetailTemplate;

const StatisticsDetailContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey_400};
  height: 100vh; /* 명지 언니가 height 조정 */
  overflow-y: auto;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_400};
  padding-left: 3rem;
  height: 5.8rem;
  color: ${({ theme }) => theme.colors.grey_900};
  ${({ theme }) => theme.fonts.Body2_Regular};
`;
