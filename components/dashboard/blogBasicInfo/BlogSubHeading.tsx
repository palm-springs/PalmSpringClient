'use client';
import React from 'react';
import styled from 'styled-components';

interface BlogSubHeadingProps {
  mainHeaderText: string;
  subHeaderText?: string;
}

const BlogSubHeading = ({ mainHeaderText, subHeaderText }: BlogSubHeadingProps) => {
  if (subHeaderText) {
    return (
      <>
        <FirstMainHeaderText>{mainHeaderText}</FirstMainHeaderText>
        <SubHeaderText>{subHeaderText}</SubHeaderText>
      </>
    );
  } else {
    return <MainHeaderText>{mainHeaderText}</MainHeaderText>;
  }
};

export default BlogSubHeading;

const MainHeaderText = styled.h3`
  margin: 2.1rem 0 1.8rem;
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;

const SubHeaderText = styled.p`
  ${({ theme }) => theme.fonts.Body1_Regular};
  margin: 0.6rem 0 3.1rem;
  color: ${({ theme }) => theme.colors.grey_900};
`;

const FirstMainHeaderText = styled.h3`
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  margin-top: 5.4rem;
  color: ${({ theme }) => theme.colors.grey_900};
`;
