'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { createBlogData } from '@/types/blogInfo';

import { createBlogDataState, progressState } from '../../states/atom';
import ImageInputForm from '../ImageInputForm';
import TextInputForm from '../TextInputForm';

const CreateOptionInfoLanding = () => {
  const [progress, setProgress] = useRecoilState(progressState);
  const [{ thumbnail, logo, description }, setBlogData] = useRecoilState(createBlogDataState);

  const [isDescriptionFocus, setIsDescriptionFocus] = useState(false);
  const [containerState, setContainerState] = useState('');

  useEffect(() => {
    if (progress === -1) {
      setContainerState('fadeDownOut');
    } else if (progress === 2) {
      setContainerState('fadeUpIn');
    } else if (progress === 3) {
      setContainerState('fadeUpOut');
    } else if (progress === -2) {
      setContainerState('fadeDownIn');
    }
  }, [progress]);

  const handleOnTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setBlogData((prev: createBlogData) => ({ ...prev, description: value }));
  };

  return (
    <CreateBasicInfoContainer className={containerState}>
      <InfoContainer>
        <Title>
          블로그 생성하기
          <div>(선택)</div>
        </Title>
        <ImageInputForm type="logo" />

        <ImageInputForm type="thumbnail" />

        <TextInputForm type="설명" isFocus={isDescriptionFocus}>
          <TextAreaInput
            value={description as string}
            placeholder="블로그 설명을 입력해주세요"
            onFocus={() => setIsDescriptionFocus(true)}
            onBlur={() => setIsDescriptionFocus(false)}
            onChange={handleOnTextChange}
          />
        </TextInputForm>
        <ButtonContainer>
          <PreviousButton type="button" onClick={() => setProgress(-1)}>
            이전으로
          </PreviousButton>
          <NextButton type="button" onClick={() => setProgress(3)}>
            다음으로
          </NextButton>
        </ButtonContainer>
      </InfoContainer>
    </CreateBasicInfoContainer>
  );
};

export default CreateOptionInfoLanding;

const CreateBasicInfoContainer = styled.div`
  display: flex;
  position: fixed;
  top: 30rem;

  gap: 4rem;
  align-items: center;
  justify-content: center;

  opacity: 0;
  z-index: 2;

  width: 100%;
  height: 100vh;

  &.fadeUpIn {
    transform: translateY(-30rem);

    transition: transform 1s, opacity 0.3s;
    opacity: 1;
    z-index: 100;
  }

  &.fadeDownIn {
    transform: translateY(-30rem);

    transition: transform 1s, opacity 0.3s;
    opacity: 1;
    z-index: 100;
  }
  &.fadeDownOut {
    transform: translateY(30rem);

    transition: transform 1s, opacity 0.3s;
    opacity: 0;
    z-index: 0;
  }

  &.fadeUpOut {
    transform: translateY(-60rem);

    transition: transform 1s, opacity 0.3s;
    opacity: 0;
    z-index: 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;

  margin: 14.4rem 0;

  width: 40rem;
`;

const Title = styled.h1`
  position: relative;
  ${({ theme }) => theme.fonts.Heading1};
  margin: 0 auto;

  & > div {
    ${({ theme }) => theme.fonts.Body2_Regular};
    position: absolute;
    right: -4.3rem;
    bottom: 0.4rem;
    color: ${({ theme }) => theme.colors.grey_700};
  }
`;

// input (textarea)
const TextAreaInput = styled.textarea`
  ${({ theme }) => theme.fonts.Body2_Regular};
  border: none;
  width: 100%;
  height: 100%;

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }

  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const PreviousButton = styled.button`
  ${({ theme }) => theme.fonts.Body1_Regular};
  margin-left: 0.3rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const NextButton = styled.button`
  ${({ theme }) => theme.fonts.Button_medium};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.green};

  width: 9.6rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
