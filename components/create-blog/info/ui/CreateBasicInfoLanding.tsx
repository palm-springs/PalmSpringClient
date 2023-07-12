'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import { ProgressStateProps } from '@/types/progress';

import TextInputForm from './TextInputForm';

const CreateBasicInfoLanding = (props: ProgressStateProps) => {
  const { progressState, setProgressState } = props;
  const router = useRouter();
  return (
    <CreateBasicInfoContainer className={progressState === 2 ? 'fadeout' : progressState === 3 ? 'hidden' : ''}>
      <InfoContainer>
        <Title>블로그 생성하기</Title>
        <TextInputForm type="이름">
          <TextInput placeholder="이름을 입력해주세요" />
        </TextInputForm>
        <TextInputForm type="주소">
          <div>palmspring.io/@</div>
          <TextInput />
        </TextInputForm>
        <ButtonContainer>
          <PreviousButton>이전으로</PreviousButton>
          <NextButton onClick={() => setProgressState(2)}>다음으로</NextButton>
        </ButtonContainer>
      </InfoContainer>
    </CreateBasicInfoContainer>
  );
};

export default CreateBasicInfoLanding;

const CreateBasicInfoContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;

  gap: 4rem;
  align-items: center;
  justify-content: center;

  z-index: 3;

  width: 100%;
  height: 100vh;

  &.fadeout {
    transform: translateY(-30rem);
    transition: 1s;
    opacity: 0;
  }

  &.hidden {
    display: none;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;
  align-items: center;

  margin: 14.4rem 0;

  width: 40.2rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Heading1};
`;

// input (text)
const TextInput = styled.input`
  ${({ theme }) => theme.fonts.Body2_Regular};
  border: none;

  padding: 0;
  width: 100%;
  height: 100%;

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

  width: 10.3rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
