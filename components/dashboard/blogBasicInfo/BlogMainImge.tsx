'use client';

import React from 'react';
import styled from 'styled-components';

import { CloseIcon, UploadIcon } from '@/public/icons';

const BlogMainImage = () => {
  return (
    <BlogMainImageContainer>
      <BlogMainUploadLabel>
        <input type="file" />
        <ImageGuideContainer>
          <ImageGuideTitle>블로그 대문 이미지</ImageGuideTitle>
          <ImageGuideContent>
            대문 이미지 권장 크기는 <p>1920*1080 입니다</p>
          </ImageGuideContent>
        </ImageGuideContainer>
        <BlogMainUpload>
          <UploadIcon />
          <UploadText>업로그하기</UploadText>
          <ImageCloseIcon />
        </BlogMainUpload>
      </BlogMainUploadLabel>
    </BlogMainImageContainer>
  );
};

export default BlogMainImage;

const ImageCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;

const UploadText = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin-left: 0.6rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const BlogMainUpload = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: 4.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_200};
  width: 50rem;
  height: 14rem;
`;

const ImageGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.8rem;
`;

const ImageGuideContent = styled.p`
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const ImageGuideTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogMainUploadLabel = styled.label`
  display: flex;
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

const BlogMainImageContainer = styled.div`
  margin-top: 3.2rem;
`;
