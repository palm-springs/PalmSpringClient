'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

import { ProgressStateProps } from '@/types/progress';
import CheckDuplication from '@/utils/checkUrlDuplication';

import TextInputForm from '../TextInputForm';

const CreateBasicInfoLanding = (props: ProgressStateProps) => {
  const { progressState, setProgressState } = props;

  // focus state
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isAddressFocus, setIsAddressFocus] = useState(false);

  // input value state
  const [nameValue, setNameValue] = useState('');
  const [addressValue, setAddressValue] = useState('');

  // input value state
  const [isAddressDuplicate, setIsAddressDuplicate] = useState<boolean | null>(null);

  const handleOnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setNameValue(value);
  };

  const handleOnAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setAddressValue(value);
    // url 중복 체크
    CheckDuplication(value, setIsAddressDuplicate);
  };

  return (
    <CreateBasicInfoContainer className={progressState === 2 ? 'fadeout' : progressState === 3 ? 'hidden' : ''}>
      <InfoContainer>
        <Title>블로그 생성하기</Title>

        <TextInputForm type="이름" isFocus={isNameFocus}>
          <TextInput
            placeholder="이름을 입력해주세요"
            onFocus={() => setIsNameFocus(true)}
            onBlur={() => setIsNameFocus(false)}
            value={nameValue}
            onChange={handleOnNameChange}
          />
        </TextInputForm>

        <TextInputForm
          type="주소"
          isFocus={isAddressFocus}
          isAddressDuplicate={isAddressDuplicate === null ? undefined : isAddressDuplicate}>
          <div>palmspring.io/@</div>
          <TextInput
            onFocus={() => setIsAddressFocus(true)}
            onBlur={() => setIsAddressFocus(false)}
            value={addressValue}
            onChange={handleOnAddressChange}
          />
        </TextInputForm>

        <ButtonContainer>
          <PreviousButton>이전으로</PreviousButton>
          <NextButton
            type="button"
            onClick={() => setProgressState(2)}
            disabled={isAddressDuplicate === null || !!isAddressDuplicate || nameValue === '' || addressValue === ''}>
            다음으로
          </NextButton>
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

const NextButton = styled.button<{ disabled: boolean }>`
  ${({ theme }) => theme.fonts.Button_medium};
  border-radius: 0.8rem;
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.background_green : theme.colors.green)};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  width: 10.3rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
