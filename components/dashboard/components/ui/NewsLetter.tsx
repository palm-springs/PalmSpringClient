import React from 'react';
import { styled } from 'styled-components';

interface NewsLetterProps {
  newsLetter: number | '발송된 뉴스레터 수';
}

const NewsLetter = (props: NewsLetterProps) => {
  const { newsLetter } = props;

  return <NewsLetterUI>{newsLetter === '발송된 뉴스레터 수' ? newsLetter : newsLetter + '개'}</NewsLetterUI>;
};

export default NewsLetter;

const NewsLetterUI = styled.span`
  ${({ theme }) => theme.fonts.Body3_Regular};
  width: 12rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_900};
`;
