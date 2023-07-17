'use client';

import React from 'react';
import styled from 'styled-components';

import { CloseIcon, UploadIcon } from '@/public/icons';

const BlogLogoImage = () => {
  return (
    <BlogLogoImageContainer>
      <BlogLogoUploadLabel>
        <input type="file" />
        <ImageGuideContainer>
          <ImageGuideTitle>블로그 로고 이미지</ImageGuideTitle>
        </ImageGuideContainer>
        <BlogLogoUpload>
          <UploadIcon />
          <UploadText>업로그하기</UploadText>
          <ImageCloseIcon />
        </BlogLogoUpload>
      </BlogLogoUploadLabel>
    </BlogLogoImageContainer>
  );
};

export default BlogLogoImage;

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

const BlogLogoUpload = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: 4.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_200};
  width: 15.6rem;
  height: 14.6rem;
`;

const ImageGuideContainer = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;

const ImageGuideTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogLogoUploadLabel = styled.label`
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

const BlogLogoImageContainer = styled.div`
  margin-top: 3.2rem;
`;
