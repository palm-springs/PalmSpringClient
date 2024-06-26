'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { imageErrorCase } from '@/constants/image';
import { IcClose24Icon, UploadIcon } from '@/public/icons';
import { getImageMultipartData } from '@/utils/getImageMultipartData';
import { imageSizeErrorNotify } from '@/utils/imageSizeErrorNotify';

interface BlogMainImageProps {
  file: string;
  setFile: (v: string | null) => void;
  readonly: boolean;
}

const BlogMainImage = (props: BlogMainImageProps) => {
  const { file, setFile, readonly } = props;

  const [preLoadImg, setPreLoadImg] = useState<string>('');

  const inputImgRef = useRef<HTMLInputElement>(null);

  const handleOnMainImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;

    if (files) {
      const blogMainImage = await getImageMultipartData(files[0]);
      if (blogMainImage === imageErrorCase.sizeError) {
        imageSizeErrorNotify();
      } else {
        blogMainImage && setFile(blogMainImage);
      }
    }
  };

  const handleOnDeleteMainImage = () => {
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
    <BlogMainImageContainer>
      <ImageGuideContainer>
        <ImageGuideTitle>블로그 대문 이미지</ImageGuideTitle>
        <ImageGuideContent>
          대문 이미지 권장 크기는 <p>1440*500 입니다</p>
        </ImageGuideContent>
      </ImageGuideContainer>
      {preLoadImg ? (
        <BlogMainImageDeleteContainer>
          <PreLoadImg src={preLoadImg} alt="블로그 메인 이미지" width={645} height={224} />
          <DeleteImageButton type="button" onClick={handleOnDeleteMainImage} disabled={readonly}>
            <IcClose24Icon />
          </DeleteImageButton>
        </BlogMainImageDeleteContainer>
      ) : (
        <BlogMainUploadLabel>
          <input
            ref={inputImgRef}
            type="file"
            onChange={handleOnMainImageChange}
            disabled={readonly}
            accept=".jpg, .jpeg, .jpe, .png, .svg, .gif"
          />
          <BlogMainUpload>
            <UploadIcon />
            <UploadText>업로드하기</UploadText>
          </BlogMainUpload>
        </BlogMainUploadLabel>
      )}
    </BlogMainImageContainer>
  );
};

export default BlogMainImage;

const BlogMainImageDeleteContainer = styled.div`
  position: relative;
`;

const DeleteImageButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  border: none;
  background: none;
  width: 2rem;
  height: 2rem;
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
  margin-left: 1.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_200};
  cursor: pointer;
  width: 64.5rem;
  height: 22.4rem;
`;

const ImageGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.8rem;
`;

const ImageGuideContent = styled.p`
  width: 14.8rem;
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.grey_700};
  p {
    margin-top: 0.4rem;
  }
`;

const ImageGuideTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogMainUploadLabel = styled.label`
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

const BlogMainImageContainer = styled.div`
  display: flex;
  margin-top: 3.2rem;
`;

const PreLoadImg = styled(Image)`
  margin-left: 1.8rem;
  border-radius: 0.8rem;
  width: 64.5rem;
  height: 22.4rem;
  object-fit: cover;
`;
