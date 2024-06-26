'use client';
import React, { ChangeEvent } from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { imageErrorCase } from '@/constants/image';
import { IcClose24Icon, UploadIcon } from '@/public/icons';
import { getImageMultipartData } from '@/utils/getImageMultipartData';
import { imageSizeErrorNotify } from '@/utils/imageSizeErrorNotify';

import { blogMetaDataState } from '../state/blogMetaData';

const BlogMetaDataImage = ({ readonly }: { readonly: boolean }) => {
  const [{ metaThumbnail }, setBlogMetaData] = useRecoilState(blogMetaDataState);

  const handleOnMetaImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;

    if (files) {
      const blogMetaImage = await getImageMultipartData(files[0]);
      if (blogMetaImage === imageErrorCase.sizeError) {
        imageSizeErrorNotify();
      } else {
        blogMetaImage && setBlogMetaData((prev) => ({ ...prev, metaThumbnail: blogMetaImage }));
      }
    }
  };

  const handleOnDeleteImage = () => {
    setBlogMetaData((prev) => ({ ...prev, metaThumbnail: null }));
  };

  return (
    <BlogMetaImageContainer>
      <ImageGuideContainer>
        <MetaDataHeader>메타데이터 이미지</MetaDataHeader>
        <ImageGuideContent>
          이미지 권장 크기는 <p>1200*630 입니다</p>
        </ImageGuideContent>
      </ImageGuideContainer>
      {metaThumbnail ? (
        // 메타 이미지 있으면 삭제할 수 있게 함
        <MetaImageContainer>
          <ImageUpload src={metaThumbnail} alt="meta data image" width={645} height={224} />
          <DeleteImageButton type="button" onClick={handleOnDeleteImage} disabled={readonly}>
            <IcClose24Icon />
          </DeleteImageButton>
        </MetaImageContainer>
      ) : (
        // 메타 이미지 없을때 초기상황
        <ImageLabel>
          <input
            type="file"
            onChange={handleOnMetaImageChange}
            disabled={readonly}
            accept=".jpg, .jpeg, .jpe, .png, .svg, .gif"
          />
          <BlogMetaDataImageUpload>
            <UploadIcon />
            <UploadText>업로드하기</UploadText>
          </BlogMetaDataImageUpload>
        </ImageLabel>
      )}
    </BlogMetaImageContainer>
  );
};

export default BlogMetaDataImage;

const MetaImageContainer = styled.div`
  position: relative;
`;

const DeleteImageButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;

const ImageUpload = styled(Image)`
  margin-left: 1.8rem;
  border-radius: 0.8rem;
  width: 64.5rem;
  height: 22.4rem;
  object-fit: cover;
`;

const UploadText = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin-left: 0.6rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const BlogMetaDataImageUpload = styled.div`
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

const ImageLabel = styled.label`
  cursor: pointer;
  & > input {
    display: none;
  }
`;

const ImageGuideContent = styled.p`
  width: 14.8rem;
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.grey_700};
  p {
    margin-top: 0.4rem;
  }
`;

const MetaDataHeader = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogMetaImageContainer = styled.div`
  display: flex;
  margin-top: 3.2rem;
`;

const ImageGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.8rem;
`;
