'use client';
import styled from 'styled-components';

import ImageInputForm from './ImageInputForm';
import TextInputForm from './TextInputForm';

const InfoInputForm = () => {
  return (
    <InfoInputFormContainer>
      <TextInputForm type="이름">
        <TextInput placeholder="이름을 입력해주세요" />
      </TextInputForm>

      <TextInputForm type="주소">
        <div>palmspring.io/@</div>
        <TextInput />
      </TextInputForm>

      <ImageInputForm type="logo" />

      <ImageInputForm type="gate" />

      <TextInputForm type="설명">
        <TextAreaInput placeholder="블로그 설명을 입력해주세요" />
      </TextInputForm>

      <SubmitButton type="button">다음으로</SubmitButton>
    </InfoInputFormContainer>
  );
};

export default InfoInputForm;

// input, submit button 전체 컨테이너
const InfoInputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
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

// 다음으로 버튼
const SubmitButton = styled.button`
  ${({ theme }) => theme.fonts.Button_medium};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2.4rem;
  border: none;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.green};

  cursor: pointer;

  width: 9.6rem;
  height: 3.6rem;

  color: ${({ theme }) => theme.colors.grey_0};
`;
