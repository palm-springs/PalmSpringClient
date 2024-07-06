'use client';
import Image from 'next/image';
import styled from 'styled-components';
import VisitantUI from '../BlogStatistics/VisitantUI';

const ArticleInfo = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${('0' + (today.getMonth() + 1)).slice(-2)}.${('0' + today.getDate()).slice(-2)} ${('0' + today.getHours()).slice(-2)}:${('0' + today.getMinutes()).slice(-2)}`;

  return (
    <>
      <ArticleInfoContainer>
        <Thumbnail />
        <div>
          <Title>리액트 API와 코드 재사용의 진화에 대한 글의 제목이 길다면 어떨까</Title>
          <Description>리액트 API와 코드 재사용의 진화에 관한 글입니다.</Description>
          <AuthorAndDate>송승훈 | 2023.06.25</AuthorAndDate>
        </div>
      </ArticleInfoContainer>
      <ArticleStatisticsWrapper>
        <ArticleStatisticsTitle>해당 게시글 통계</ArticleStatisticsTitle>
        <ArticleStatisticsTime>{formattedDate}</ArticleStatisticsTime>
      </ArticleStatisticsWrapper>
      <VisitantUI />
    </>
  );
};

export default ArticleInfo;

const ArticleStatisticsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 4rem 0 0 4rem;
`;

const ArticleStatisticsTime = styled.p`
  margin: 0.4rem 0 0 0.8rem;
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const ArticleStatisticsTitle = styled.h2`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;

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
