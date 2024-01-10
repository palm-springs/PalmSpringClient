'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { imageErrorCase } from '@/constants/image';
import { CloseIcon, UploadIcon } from '@/public/icons';
import { getImageMultipartData } from '@/utils/getImageMultipartData';
import { imageSizeErrorNotify } from '@/utils/imageSizeErrorNotify';

interface BlogLogoImageProps {
  file: string;
  setFile: (v: string | null) => void;
  readonly: boolean;
}

const BlogLogoImage = (props: BlogLogoImageProps) => {
  const { file, setFile, readonly } = props;

  const [preLoadImg, setPreLoadImg] = useState<string>('');

  const inputImgRef = useRef<HTMLInputElement>(null);

  const handleOnLogoImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;

    if (files) {
      const blogLogoImage = await getImageMultipartData(files[0]);
      if (blogLogoImage === imageErrorCase.sizeError) {
        imageSizeErrorNotify();
      } else {
        blogLogoImage && setFile(blogLogoImage);
      }
    }
  };

  const handleOnDeleteLogoImage = () => {
    setFile(null);
    setPreLoadImg('');
    if (inputImgRef.current) {
      inputImgRef.current.value = '';
    }
  };

  useEffect(() => {
    if (!file) return;
    setPreLoadImg(file);
  }, [file]);

  return (
    <BlogLogoImageContainer>
      <ImageGuideContainer>
        <ImageGuideTitle>블로그 로고 이미지</ImageGuideTitle>
      </ImageGuideContainer>
      {preLoadImg ? (
        <LogoImageContainer>
          <PreLoadImg src={preLoadImg} alt="블로그 로고 이미지" />
          <DeleteImageButton type="button" onClick={handleOnDeleteLogoImage} disabled={readonly}>
            <CloseIcon />
          </DeleteImageButton>
        </LogoImageContainer>
      ) : (
        <BlogLogoUploadLabel>
          <input
            ref={inputImgRef}
            type="file"
            onChange={handleOnLogoImageChange}
            disabled={readonly}
            accept=".jpg, .jpeg, .jpe, .png, .svg, .gif"
          />
          <BlogLogoUpload>
            <UploadIcon />
            <UploadText>업로드하기</UploadText>
          </BlogLogoUpload>
        </BlogLogoUploadLabel>
      )}
    </BlogLogoImageContainer>
  );
};

export default BlogLogoImage;

const LogoImageContainer = styled.div`
  position: relative;
`;

const DeleteImageButton = styled.button`
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
  margin-left: 1.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_200};
  cursor: pointer;
  width: 64.5rem;
  height: 14.6rem;
`;

const ImageGuideContainer = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;

const ImageGuideTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  width: 14.8rem;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogLogoUploadLabel = styled.label`
  display: flex;
  position: relative;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
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
  display: flex;
  margin-top: 3.2rem;
`;

const PreLoadImg = styled.img`
  margin-left: 1.8rem;
  border-radius: 0.8rem;
  width: auto;
  height: 14.6rem;
`;
