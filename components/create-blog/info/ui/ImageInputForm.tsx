'use client';

import { ChangeEvent, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { imageErrorCase } from '@/constants/image';
import { IcClose24Icon, UploadIcon } from '@/public/icons';
import { getImageMultipartData } from '@/utils/getImageMultipartData';
import { imageSizeErrorNotify } from '@/utils/imageSizeErrorNotify';

import { createBlogDataState } from '../states/atom';

import InputTitle from './InputTitle';

interface ImageInputFormProps {
  type: string;
}

const ImageInputForm = (props: ImageInputFormProps) => {
  const { type } = props;
  // 임시 state
  const [imgSrc, setImgSrc] = useState('');
  const setBlogData = useSetRecoilState(createBlogDataState);

  const handleOnDeleteImg = () => {
    setImgSrc('');
    setBlogData((prev) => ({ ...prev, [type]: null }));
  };

  const handleOnFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;

    const reader = new FileReader();
    if (files) {
      const remoteImgUrl = await getImageMultipartData(files[0]);
      if (remoteImgUrl === imageErrorCase.sizeError) {
        imageSizeErrorNotify();
      } else {
        setBlogData((prev) => ({ ...prev, [type]: remoteImgUrl }));

        reader.readAsDataURL(files[0] as Blob);
        reader.onloadend = () => {
          setImgSrc(reader.result as string);
        };
      }
    }
  };

  return (
    <div>
      <InputTitle>
        블로그 {type === 'logo' ? '로고' : '대문'} 이미지
        {type === 'thumbnail' && <span>대문 이미지 권장 크기는 1440*500 입니다</span>}
      </InputTitle>

      <ImageContainer className={type} isImgSrc={!!imgSrc}>
        {imgSrc ? (
          <>
            <img src={imgSrc} alt={`${type} 이미지`} />
            <CloseButton onClick={handleOnDeleteImg} className={type}>
              <IcClose24Icon />
            </CloseButton>
          </>
        ) : (
          <Label>
            <UploadIcon />
            업로드하기
            <input type="file" onChange={handleOnFileChange} accept=".jpg, .jpeg, .jpe, .png, .webp, .svg, .gif" />
          </Label>
        )}
      </ImageContainer>
    </div>
  );
};

export default ImageInputForm;

// img input 입력  컨테이너
const ImageContainer = styled.div<{ isImgSrc: boolean }>`
  position: relative;
  margin-top: 0.8rem;
  cursor: pointer;

  width: ${({ isImgSrc }) => (isImgSrc ? 'min-content' : '40rem')};

  & > img {
    border-radius: 0.8rem;
  }

  &.logo {
    height: 11.6rem;
    & > img {
      max-width: 40rem;
      max-height: 100%;
      object-fit: contain;
    }
  }
  &.thumbnail {
    height: 13.9rem;
    & > img {
      width: 40rem;
      height: 100%;
      object-fit: cover;
    }
  }

  & > div {
    height: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 1.2rem;
  width: 2.4rem;
  height: 2.4rem;
  &.logo {
    bottom: 8rem;
  }
  &.thumbnail {
    bottom: 10.3rem;
  }
`;

const Label = styled.label`
  ${({ theme }) => theme.fonts.Body2_Semibold};

  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.grey_200};

  cursor: pointer;
  height: 100%;

  color: ${({ theme }) => theme.colors.grey_700};

  & > input {
    display: none;
  }
`;
