'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { Loader01Icon } from '@/public/icons';
import { createBlogData } from '@/types/blogInfo';
import CheckDuplication from '@/utils/checkUrlDuplication';

import { addressDuplicateState, createBlogDataState, invalidTextState, progressState } from '../../states/atom';
import TextInputForm from '../TextInputForm';

const CreateBasicInfoLanding = () => {
  const router = useRouter();
  const [progress, setProgress] = useRecoilState(progressState);

  const [containerState, setContainerState] = useState('');
  const [isInvalidText, setInvalidText] = useRecoilState(invalidTextState);

  // focus state
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isAddressFocus, setIsAddressFocus] = useState(false);

  // input value state
  const [{ url, name }, setBlogData] = useRecoilState(createBlogDataState);
  const [isAddressDuplicate, setIsAddressDuplicate] = useRecoilState<boolean | null>(addressDuplicateState);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.currentTarget;
    setBlogData((prev: createBlogData) => ({ ...prev, [id]: value }));

    if (id === 'url') {
      const checkAddressRule = /^[a-z0-9-]*$/.test(value);
      if (checkAddressRule) {
        setInvalidText(false);
        CheckDuplication(value, setIsAddressDuplicate);
      } else {
        setInvalidText(true);
      }
    }
  };

  useEffect(() => {
    if (progress === -1) {
      setContainerState('fadeDownIn');
    } else if (progress === 2) {
      setContainerState('fadeOut');
    }
  }, [progress]);

  return (
    <CreateBasicInfoContainer className={containerState}>
      <InfoContainer>
        <Title>블로그 생성하기</Title>

        <TextInputForm type="이름" isFocus={isNameFocus}>
          <TextInput
            id={'name'}
            placeholder="이름을 입력해주세요"
            onFocus={() => setIsNameFocus(true)}
            onBlur={() => setIsNameFocus(false)}
            value={name}
            onChange={handleOnChange}
          />
        </TextInputForm>

        <TextInputForm type="주소" isFocus={isAddressFocus}>
          <TextInput
            id={'url'}
            onFocus={() => setIsAddressFocus(true)}
            onBlur={() => setIsAddressFocus(false)}
            value={url}
            onChange={handleOnChange}
            placeholder="블로그 주소를 입력해주세요"
          />
          {!isInvalidText && isAddressDuplicate === null && url !== '' && <Loader01Icon />}
        </TextInputForm>

        <ButtonContainer>
          <PreviousButton
            onClick={() => {
              router.back();
            }}>
            이전으로
          </PreviousButton>
          <NextButton
            type="button"
            onClick={() => setProgress(2)}
            disabled={isAddressDuplicate === null || !!isAddressDuplicate || name === '' || url === ''}>
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

  z-index: 100;

  width: 100%;
  height: 100vh;

  &.fadeDownIn {
    transform: translateY(0);
    transition: transform 1s, opacity 0.3s;
    opacity: 1;
    z-index: 100;
  }

  &.fadeOut {
    transform: translateY(-30rem);
    transition: transform 1s, opacity 0.3s;
    opacity: 0;
    z-index: 0;
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
  color: ${({ theme }) => theme.colors.grey_900};
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
  &:hover {
    text-decoration: underline;
  }
`;

const NextButton = styled.button<{ disabled: boolean }>`
  ${({ theme }) => theme.fonts.Button_medium};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.green};

  cursor: pointer;

  width: 10.3rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background_green};
    cursor: default;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.green_hover};
  }
`;
