'use client';

import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { IcClose24Icon, UploadIcon } from '@/public/icons';

import InputTitle from './InputTitle';

interface ImageInputFormProps {
  type: string;
}

const ImageInputForm = (props: ImageInputFormProps) => {
  const { type } = props;
  // 임시 state
  const [imgSrc, setImgSrc] = useState('');

  const handleOnFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    const reader = new FileReader();
    reader.readAsDataURL(files[0] as FileList);
    reader.onloadend = () => {
      setImgSrc(reader.result as string);
    };
  };

  return (
    <ImageInputFormContainer>
      <InputTitle>
        블로그 {type === 'logo' ? '로고' : '대문'} 이미지
        {type === 'gate' && <span>대문 이미지 권장 크기는 1440*500 입니다</span>}
      </InputTitle>

      <ImageContainer className={type}>
        {imgSrc ? (
          <>
            <Image src={imgSrc} alt="" width={400} height={type === 'logo' ? 116 : 139} />
            <button onClick={() => setImgSrc('')}>
              <IcClose24Icon />
            </button>
          </>
        ) : (
          <Label>
            <UploadIcon />
            업로드하기
            <input type="file" onChange={handleOnFileChange} />
          </Label>
        )}
      </ImageContainer>
    </ImageInputFormContainer>
  );
};

export default ImageInputForm;

const ImageInputFormContainer = styled.div`
  width: 100%;
`;

// img input 입력  컨테이너
const ImageContainer = styled.div`
  position: relative;
  margin-top: 0.8rem;
  &.logo {
    height: 11.6rem;
  }
  &.gate {
    height: 13.9rem;
  }

  & > img {
    border-radius: 0.8rem;
    width: 100%;
    height: 100%;
  }

  & > button {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    width: 2.4rem;
    height: 2.4rem;
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
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.grey_700};

  & > input {
    display: none;
  }
`;
