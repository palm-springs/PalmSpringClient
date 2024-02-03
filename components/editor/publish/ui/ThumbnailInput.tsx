'use client';

import React, { ChangeEvent, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { imageErrorCase } from '@/constants/image';
import { IcClose24Icon, ThumbnailIcon } from '@/public/icons';
import { UpdateArticleProps } from '@/types/article';
import { UpdatePageProps } from '@/types/page';
import { getImageMultipartData } from '@/utils/getImageMultipartData';
import { imageSizeErrorNotify } from '@/utils/imageSizeErrorNotify';

import { articleDataState, pageDataState } from '../../states/atom';

interface ThumbnailInputProps {
  pageType: string;
  pageData?: UpdatePageProps;
  articleData?: UpdateArticleProps;
}

const ThumbnailInput = (props: ThumbnailInputProps) => {
  const { pageType, pageData, articleData } = props;
  const { team } = useParams();

  const [{ thumbnail: articleThumbnail }, setArticleData] = useRecoilState(articleDataState);
  const [{ thumbnail: pageThumbnail }, setPageData] = useRecoilState(pageDataState);

  useEffect(() => {
    if (articleData) {
      setArticleData((prev) => ({ ...prev, thumbnail: articleData.thumbnail }));
    } else if (pageData) {
      setPageData((prev) => ({ ...prev, thumbnail: pageData.thumbnail }));
    }
  }, []);

  const encodeFileToBase64 = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return null;
    }
    const file = files[0];
    const thumbnail = await getImageMultipartData(file);
    if (thumbnail === imageErrorCase.sizeError) {
      imageSizeErrorNotify();
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        if (pageType === 'article') {
          thumbnail && setArticleData((prev) => ({ ...prev, thumbnail }));
        } else {
          thumbnail && setPageData((prev) => ({ ...prev, thumbnail }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleArticleThumbnailDel = () => {
    setArticleData((prev) => ({ ...prev, thumbnail: null }));
  };
  const handlePageThumbnailDel = () => {
    setPageData((prev) => ({ ...prev, thumbnail: null }));
  };

  switch (pageType) {
    case `article`:
      return (
        <>
          <Toaster
            position="bottom-center"
            reverseOrder={false}
            containerClassName=""
            containerStyle={{
              bottom: 80,
            }}
          />
          <ThumbnailInputLabel>
            <input
              type="file"
              id="logo_input"
              onChange={(event) => encodeFileToBase64(event)}
              accept=".jpg, .jpeg, .jpe, .png, .svg, .gif"
            />
            {articleThumbnail ? (
              <ThumbnailWrapper>
                <CustomImage src={articleThumbnail} alt="미리보기 이미지" width={540} height={304} />
                <DeleteImageButton type="button" onClick={handleArticleThumbnailDel}>
                  <IcClose24Icon />
                </DeleteImageButton>
              </ThumbnailWrapper>
            ) : (
              <>
                <ThumbnailTitleContainer>
                  <ThumbnailIcon />
                  <ThumbnailInputTitle>업로드하기 (선택)</ThumbnailInputTitle>
                </ThumbnailTitleContainer>
                <ThumbnailInputInfo>커버 이미지 권장 크기는 800*600 입니다.</ThumbnailInputInfo>
              </>
            )}
          </ThumbnailInputLabel>
        </>
      );
    case `page`:
      return (
        <>
          <Toaster
            position="bottom-center"
            reverseOrder={false}
            containerClassName=""
            containerStyle={{
              bottom: 80,
            }}
          />
          <ThumbnailInputLabel>
            <input
              type="file"
              id="logo_input"
              onChange={(event) => encodeFileToBase64(event)}
              accept=".jpg, .jpeg, .jpe, .png, .svg, .gif"
            />
            {pageThumbnail ? (
              <ThumbnailWrapper>
                <CustomImage src={pageThumbnail} alt="미리보기 이미지" width={540} height={304} />
                <DeleteImageButton type="button" onClick={handlePageThumbnailDel}>
                  <IcClose24Icon />
                </DeleteImageButton>
              </ThumbnailWrapper>
            ) : (
              <>
                <ThumbnailTitleContainer>
                  <ThumbnailIcon />
                  <ThumbnailInputTitle>업로드하기 (선택)</ThumbnailInputTitle>
                </ThumbnailTitleContainer>
                <ThumbnailInputInfo>커버 이미지 권장 크기는 800*600 입니다.</ThumbnailInputInfo>
              </>
            )}
          </ThumbnailInputLabel>
        </>
      );
    default:
      break;
  }
};

export default ThumbnailInput;

const ThumbnailWrapper = styled.div`
  position: relative;
`;

const DeleteImageButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;

const CustomImage = styled(Image)`
  border-radius: 1.6rem;
  width: 54rem;
  max-width: 100%;

  height: 30.4rem;
  max-height: 100%;

  object-fit: cover;
`;

const ThumbnailTitleContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const ThumbnailInputInfo = styled.h1`
  margin-top: 1.6rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body3_Regular};
`;

const ThumbnailInputTitle = styled.p`
  margin-left: 0.6rem;
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;

const ThumbnailInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.grey_100};
  width: 54rem;
  height: 30.375rem;

  input[type='file'] {
    position: absolute;
    margin: -1px;
    border: 0;
    padding: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }
`;
