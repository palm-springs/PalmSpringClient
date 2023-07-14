'use client';

import { ChangeEvent, useState } from 'react';
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
    <div>
      <InputTitle>
        블로그 {type === 'logo' ? '로고' : '대문'} 이미지
        {type === 'gate' && <span>대문 이미지 권장 크기는 1440*500 입니다</span>}
      </InputTitle>

      <ImageContainer className={type}>
        {imgSrc ? (
          <>
            <img src={imgSrc} alt={`${type} 이미지`} />
            <CloseButton onClick={() => setImgSrc('')} className={type}>
              <IcClose24Icon />
            </CloseButton>
          </>
        ) : (
          <Label>
            <UploadIcon />
            업로드하기
            <input type="file" onChange={handleOnFileChange} />
          </Label>
        )}
      </ImageContainer>
    </div>
  );
};

export default ImageInputForm;

// img input 입력  컨테이너
const ImageContainer = styled.div`
  margin-top: 0.8rem;
  &.logo {
    height: 11.6rem;
  }
  &.gate {
    height: 13.9rem;
  }

  & > div {
    width: 100%;
    height: 100%;
  }

  & > img {
    border-radius: 0.8rem;
    height: 100%;

    object-fit: contain;
  }
`;

const CloseButton = styled.button`
  position: relative;
  right: 3.6rem;
  width: 2.4rem;
  height: 2.4rem;
  &.logo {
    bottom: 8rem;
  }
  &.gate {
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

  height: 100%;
  color: ${({ theme }) => theme.colors.grey_700};

  & > input {
    display: none;
  }
`;
