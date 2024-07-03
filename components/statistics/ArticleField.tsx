'use client';
import styled from 'styled-components';

const ArticleField = () => {
  return (
    <ArticleFieldContainer>
      <Field className="title">제목</Field>
      <Field className="author">작성자</Field>
      <Field className="date">작성일</Field>
      <Field>오늘 조회수</Field>
      <Field>누적 조회수</Field>
    </ArticleFieldContainer>
  );
};

export default ArticleField;

const ArticleFieldContainer = styled.div`
  display: flex;

  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_400};

  padding-bottom: 0.8rem;
  width: 100%;
`;

const Field = styled.p`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  width: 10%;
  color: ${({ theme }) => theme.colors.grey_700};

  &:last-child {
    margin-right: 7rem;
  }
  &.title {
    width: 50%;
  }
  &.author {
    width: 7%;
  }
`;
