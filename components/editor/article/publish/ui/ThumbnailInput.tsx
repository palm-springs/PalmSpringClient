'use client';

import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { ThumbnailIcon } from '@/public/icons';
import { getImageMultipartData } from '@/utils/getImageMultipartData';

import { articleDataState, pageDataState } from '../../states/atom';

interface ThumbnailInputProps {
  pageType: string;
}

const ThumbnailInput = (props: ThumbnailInputProps) => {
  const { pageType } = props;
  const router = useRouter();

  const [imageSrc, setImageSrc] = useState('');
  const setArticleData = useSetRecoilState(articleDataState);
  const setPageData = useSetRecoilState(pageDataState);

  const encodeFileToBase64 = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return null;
    }
    const file = files[0];
    const thumbnail = await getImageMultipartData(file);
    console.log(thumbnail);

    const reader = new FileReader();
    reader.onload = () => {
      setArticleData((prev) => ({ ...prev, thumbnail }));
      setImageSrc(thumbnail); // 이미지 데이터 업데이트
    };
    reader.readAsDataURL(file);
  };

  const pageEncodeFileImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return null;
    }
    const file = files[0];
    const thumbnail = await getImageMultipartData(file);
    console.log(thumbnail);

    const reader = new FileReader();
    reader.onload = () => {
      setPageData((prev) => ({ ...prev, thumbnail }));
      setImageSrc(thumbnail); // 이미지 데이터 업데이트
    };
    reader.readAsDataURL(file);
  };

  switch (pageType) {
    case `article`:
      return (
        <>
          <ThumbnailInputLabel>
            <input type="file" id="logo_input" onChange={(event) => encodeFileToBase64(event)} />
            {imageSrc ? (
              <CustomImage src={imageSrc} alt="미리보기 이미지" />
            ) : (
              <>
                <ThumbnailTitleContainer>
                  <ThumbnailIcon />
                  <ThumbnailInputTitle>업로드하기 (선택)</ThumbnailInputTitle>
                </ThumbnailTitleContainer>
                <ThumbnailInputInfo>커버 이미지 권장 크기는 1920*1080 이상입니다.</ThumbnailInputInfo>
              </>
            )}
          </ThumbnailInputLabel>
        </>
      );
    case `page`:
      return (
        <>
          <ThumbnailInputLabel>
            <input type="file" id="logo_input" onChange={(event) => pageEncodeFileImage(event)} />
            {imageSrc ? (
              <CustomImage src={imageSrc} alt="미리보기 이미지" />
            ) : (
              <>
                <ThumbnailTitleContainer>
                  <ThumbnailIcon />
                  <ThumbnailInputTitle>업로드하기 (선택)</ThumbnailInputTitle>
                </ThumbnailTitleContainer>
                <ThumbnailInputInfo>커버 이미지 권장 크기는 1920*1080 이상입니다.</ThumbnailInputInfo>
              </>
            )}
          </ThumbnailInputLabel>
        </>
      );
    default:
      router.push('/not-found');
  }
};

export default ThumbnailInput;

const CustomImage = styled.img`
  width: 54rem;
  max-width: 100%;

  height: 30.4rem;
  max-height: 100%;
`;

const ThumbnailTitleContainer = styled.div`
  display: flex;
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
  border-radius: 0.5rem;
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
