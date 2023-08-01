'use client';

import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { UploadIcon } from '@/public/icons';

interface BlogMainImageProps {
  setFile: (v: File) => void;
}

const BlogMainImage = (props: BlogMainImageProps) => {
  const { setFile } = props;

  const [preLoadImg, setPreLoadImg] = useState<string>('');

  return (
    <BlogMainImageContainer>
      <ImageGuideContainer>
        <ImageGuideTitle>블로그 대문 이미지</ImageGuideTitle>
        <ImageGuideContent>
          대문 이미지 권장 크기는 <p>1920*1080 입니다</p>
        </ImageGuideContent>
      </ImageGuideContainer>
      <BlogMainUploadLabel>
        <input
          type="file"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const file = e.target?.files![0];
            if (!file) return;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              setPreLoadImg(reader.result as string);
            };
            setFile(file);
          }}
        />
        {preLoadImg ? (
          <PreLoadImg src={preLoadImg} alt="블로그 메인 이미지" />
        ) : (
          <BlogMainUpload>
            <UploadIcon />
            <UploadText>업로드하기</UploadText>
            {/* <ImageCloseIcon /> */}
          </BlogMainUpload>
        )}
      </BlogMainUploadLabel>
    </BlogMainImageContainer>
  );
};

export default BlogMainImage;

// const ImageCloseIcon = styled(CloseIcon)`
//   position: absolute;
//   top: 1.2rem;
//   right: 1.2rem;
// `;

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
  cursor: pointer;
  width: 64.5rem;
  height: 22.4rem;
`;

const ImageGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.8rem;
`;

const ImageGuideContent = styled.p`
  margin-top: 0.4rem;
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

const PreLoadImg = styled.img`
  margin-left: 4.8rem;
  border-radius: 0.8rem;
  width: 64.5rem;
  height: 22.4rem;
  object-fit: cover;
`;
