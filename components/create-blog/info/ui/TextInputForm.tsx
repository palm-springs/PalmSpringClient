'use client';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { DOMAIN_NAME } from '@/constants/palmspringInfo';

import { addressDuplicateState, createBlogDataState, invalidTextState } from '../states/atom';

import InputMessage from './basicInfo/InputMessage';
import InputTitle from './InputTitle';
interface TextInputFormProps {
  type: string;
  children: React.ReactNode;
  isFocus: boolean;
}

const TextInputForm = (props: TextInputFormProps) => {
  const { type, children, isFocus } = props;
  const isAddressDuplicate = useRecoilValue(addressDuplicateState);
  const isInvalidText = useRecoilValue(invalidTextState);
  const { url } = useRecoilValue(createBlogDataState);

  let id = '';
  if (url === '' || type !== '주소') {
    id = '';
  } else if (isInvalidText) {
    id = 'failed';
  } else if (isAddressDuplicate === null) {
    id = '';
  } else if (isAddressDuplicate) {
    id = 'failed';
  } else {
    id = 'success';
  }

  return (
    <Label>
      <TitleContainer>
        <InputTitle>블로그 {type}</InputTitle>
        {type === '주소' && <span>영어 소문자와 숫자, 하이픈(-)만 사용할 수 있어요</span>}
      </TitleContainer>
      <InputContainer>
        <InputBox className={type} id={id} $isFocus={isFocus}>
          {children}
        </InputBox>
        {type === '주소' && <div>.{DOMAIN_NAME}</div>}
      </InputContainer>
      {type === '주소' && (isInvalidText || isAddressDuplicate !== undefined) && <InputMessage />}
    </Label>
  );
};

export default TextInputForm;

const Label = styled.label`
  display: flex;
  position: relative;
  flex-direction: column;

  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  margin-bottom: 0.8rem;

  & > span {
    ${({ theme }) => theme.fonts.Caption};
    margin-top: 0.3rem;
    color: ${({ theme }) => theme.colors.grey_700};
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  width: 100%;
  & > div {
    ${({ theme }) => theme.fonts.Body2_Regular};
    color: ${({ theme }) => theme.colors.grey_900};
  }
`;

// text input 입력  컨테이너
const InputBox = styled.div<{ $isFocus: boolean }>`
  border: 1px solid;

  border-radius: 0.8rem;

  border-color: ${({ theme, $isFocus }) => ($isFocus ? theme.colors.grey_700 : theme.colors.grey_400)};

  padding: 1rem 1.2rem;
  width: 100%;
  height: 4.6rem;

  &.주소 {
    display: flex;
    align-items: center;
    width: 30.1rem;
  }

  &.설명 {
    height: 7.9rem;
  }

  &#failed {
    border-color: ${({ theme }) => theme.colors.red};
  }

  &#success {
    border-color: ${({ theme }) => theme.colors.green};
  }

  & > svg {
    position: absolute;
    right: 11.1rem;
    transform-origin: 50% 50%;

    animation: rotate_image 5s linear infinite;

    @keyframes rotate_image {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
