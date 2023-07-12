'use client';

import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { ImageDownIcon } from '@/public/icons';

import InputTitle from './InputTitle';

interface ImageInputFormProps {
  type: string;
}

const ImageInputForm = (props: ImageInputFormProps) => {
  const { type } = props;
  // 임시 state
  const [imgState] = useState(null);

  return (
    <div>
      <InputTitle>
        블로그 {type === 'logo' ? '로고' : '대문'} 이미지<span>000*000 JPEG (이미지 규격 가이드)</span>
      </InputTitle>

      <ImageContainer className={type}>
        {imgState ? (
          <Image src={''} alt="" />
        ) : (
          <Label>
            <ImageDownIcon />
            업로드하기
            <input type="file" />
          </Label>
        )}
      </ImageContainer>
    </div>
  );
};

export default ImageInputForm;

// img input 입력  컨테이너
const ImageContainer = styled.div`
  &.logo {
    height: 11.6rem;
  }
  &.gate {
    height: 7.3rem;
  }

  & > img {
    border-radius: 0.8rem;
    width: 100%;
    height: 100%;
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
