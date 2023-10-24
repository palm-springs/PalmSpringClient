'use client';
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { blogMetaDataState } from '../state/blogMetaData';

const MetaDataPreview = () => {
  const [blogMetaData, setBlogMetaData] = useRecoilState(blogMetaDataState);

  const { image, title, description } = blogMetaData;

  return (
    <MetaDataPreviewContainer>
      <PreviewHeader>미리보기</PreviewHeader>
      <MetaDataPreviewBoxContainer>
        {image ? <PreviewImage src={image} alt="meta data image" /> : <NonePreviewImage></NonePreviewImage>}
        {/* 14.2 */}
        <PreviewBottomContainer>
          <PreviewTitle>{title}</PreviewTitle>
          <PreviewDescription>{description}</PreviewDescription>
          {/* url 자리임 -> 데이터 받아서 교체*/}
          <PreviewBlogUrl>Parmspring.com</PreviewBlogUrl>
        </PreviewBottomContainer>
      </MetaDataPreviewBoxContainer>
    </MetaDataPreviewContainer>
  );
};

export default MetaDataPreview;

const PreviewHeader = styled.h1`
  ${({ theme }) => theme.mobileFonts.Button};
  color: ${({ theme }) => theme.colors.dimmed};
`;

const MetaDataPreviewContainer = styled.div`
  margin: 3.2rem 0 0 16.7rem;
`;

const MetaDataPreviewBoxContainer = styled.div`
  margin-top: 1.8rem;
  border: 1px solid #d9d9d9;
  width: 39.4rem;
  height: 31.8rem;
`;

const PreviewBottomContainer = styled.div`
  margin-left: 3rem;
  height: 14.2rem;
`;

const PreviewBlogUrl = styled.p`
  ${({ theme }) => theme.fonts.Body2_Regular};
  margin: 0.7rem 0 2.5rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const PreviewDescription = styled.p`
  ${({ theme }) => theme.fonts.Body2_Regular};
  margin-top: 1.5rem;
  width: 22.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const PreviewTitle = styled.p`
  ${({ theme }) => theme.mobileFonts.Markdown_H2};
  margin-top: 2.4rem;
  color: ${({ theme }) => theme.colors.grey_1000};
`;

const NonePreviewImage = styled.div`
  background-color: ${({ theme }) => theme.colors.grey_200};
  width: 39.4rem;
  height: 15.1rem;
`;

const PreviewImage = styled.img`
  width: 39.4rem;
  height: 15.1rem;
  object-fit: cover;
`;
