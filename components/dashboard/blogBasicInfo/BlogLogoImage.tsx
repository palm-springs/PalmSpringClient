'use client';

import React from 'react';
import styled from 'styled-components';

import { ImageUploadIcon } from '@/public/icons';

const BlogLogoImage = () => {
  return (
    <BlogLogoImageContainer>
      <BlogLogoUploadLabel>
        <input type="file" />
        <ImageGuideContainer>
          <ImageGuideTitle>블로그 로고 이미지</ImageGuideTitle>
          <ImageGuideContent>000*000 JPEG (이미지 규격 가이드)</ImageGuideContent>
        </ImageGuideContainer>
        <BlogLogoUpload>
          <ImageUploadIcon />
          <UploadText>업로그하기</UploadText>
        </BlogLogoUpload>
      </BlogLogoUploadLabel>
    </BlogLogoImageContainer>
  );
};

export default BlogLogoImage;

const UploadText = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin-left: 0.6rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const BlogLogoUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_200};
  width: 50rem;
  height: 7.3rem;
`;

const ImageGuideContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2.4rem 0 0.8rem 0;
`;

const ImageGuideContent = styled.p`
  ${({ theme }) => theme.fonts.Caption};
  margin-left: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const ImageGuideTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogLogoUploadLabel = styled.label`
  border: none;
  border-radius: 0.5rem;
  input[type='file'] {
    position: absolute;
    margin: -0.1rem;
    border: 0;
    padding: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }
`;

const BlogLogoImageContainer = styled.div`
  margin-top: 3.2rem;
`;
