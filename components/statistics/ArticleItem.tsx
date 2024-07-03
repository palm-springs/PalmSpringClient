'use client';
import Link from 'next/link';
import styled from 'styled-components';

const ArticleItem = () => {
  return (
    <ArticleItemContainer>
      <Value className="title">
        전 세계에서 폭발적으로 인기를 끈 가상 현실 게임,넥서스 출시!전 세계에서 폭발적으로 인기를 끈 가상 현실
        게임,넥서스 출시!
      </Value>
      <Value className="author">김서윤</Value>
      <Value className="date">2023.07.06</Value>
      <Value>150</Value>
      <Value>6,123</Value>
      <StatisticsDetailButton href="">통계</StatisticsDetailButton>
    </ArticleItemContainer>
  );
};

export default ArticleItem;

const ArticleItemContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_400};

  padding: 1.4rem 0;
  width: 100%;
`;

const Value = styled.span`
  ${({ theme }) => theme.fonts.Body3_Regular};
  width: 10%;
  color: ${({ theme }) => theme.colors.grey_700};

  &:last-child {
    margin-right: 7rem;
  }
  &.author {
    width: 7%;
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ theme }) => theme.colors.grey_900};
  }
  &.title {
    ${({ theme }) => theme.fonts.Body3_Semibold};
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.grey_900};
  }
`;

const StatisticsDetailButton = styled(Link)`
  ${({ theme }) => theme.fonts.Caption};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.grey_900};
  width: 4.4rem;
  height: 2.5rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
