'use client';
import styled from 'styled-components';

import ImageInputForm from './ImageInputForm';
import ProgressDot from './ProgressDot';
import TextInputForm from './TextInputForm';

const CreateOptionInfoLanding = () => {
  return (
    <CreateBasicInfoContainer>
      <ProgressDot progress={2} />
      <InfoContainer>
        <Title>블로그 생성하기</Title>
        <ImageInputForm type="logo" />

        <ImageInputForm type="gate" />

        <TextInputForm type="설명">
          <TextAreaInput placeholder="블로그 설명을 입력해주세요" />
        </TextInputForm>
        <ButtonContainer>
          <PreviousButton>이전으로</PreviousButton>
          <div>
            <SkipButton>건너뛰기</SkipButton>
            <NextButton>다음으로</NextButton>
          </div>
        </ButtonContainer>
      </InfoContainer>
    </CreateBasicInfoContainer>
  );
};

export default CreateOptionInfoLanding;

const CreateBasicInfoContainer = styled.div`
  display: flex;

  gap: 4rem;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;
  align-items: center;

  margin: 14.4rem 7rem 14.4rem 0;

  width: 40rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Heading1};
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

  & > div {
    display: flex;
    gap: 0.8rem;
  }
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

const SkipButton = styled.button`
  ${({ theme }) => theme.fonts.Button_medium};
  border: 1px solid ${({ theme }) => theme.colors.grey_700};
  border-radius: 0.8rem;
  width: 9.6rem;
  height: 3.6rem;

  color: ${({ theme }) => theme.colors.grey_700};
`;