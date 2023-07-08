'use client';

import React from 'react';
import styled from 'styled-components';

import { ThumbnailIcon } from '@/public/icons';

const ThumbnailInput = () => {
  return (
    <ThumbnailContainer>
      <ThumbnailInputLabel>
        <input type="file" id="logo_input" />
        <ThumbnailIcon />
        <ThumbnailInputTitle>썸네일 업로드</ThumbnailInputTitle>
        <ThumbnailInputInfo>
          커버 이미지 권장 너비는 1800 이상입니다.
          <br />
          파일당 최대 크기는 5MB입니다.
        </ThumbnailInputInfo>
      </ThumbnailInputLabel>
    </ThumbnailContainer>
  );
};

export default ThumbnailInput;

const ThumbnailContainer = styled.div`
  margin: 8.1rem 0 0 45rem;
`;

const ThumbnailInputInfo = styled.p`
  margin-top: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body3_Regular};
`;

const ThumbnailInputTitle = styled.p`
  margin-top: 0.8rem;
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
  height: 23.1rem;

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
