'use client';
import styled from 'styled-components';

import { RequiredCircleIcon } from '@/public/icons';

import InputTitle from './InputTitle';
interface TextInputFormProps {
  text: string;
  children: React.ReactNode;
  isFocus: boolean;
  isDuplicate: boolean | null;
}

const TextIdInputForm = (props: TextInputFormProps) => {
  const { text, children, isFocus, isDuplicate } = props;

  return (
    <Label>
      <TitleContainer>
        <InputTitle>{text}</InputTitle>
        <RequiredIcon />
      </TitleContainer>
      <InputContainer
        id={isDuplicate === null ? '' : isDuplicate ? 'failed' : 'success'}
        $isFocus={isFocus}
        $isDuplicate={isDuplicate}>
        {children}
      </InputContainer>
    </Label>
  );
};

export default TextIdInputForm;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
`;

const RequiredIcon = styled(RequiredCircleIcon)`
  margin-top: 0.2rem;
`;

// text input 입력  컨테이너
const InputContainer = styled.div<{ $isFocus: boolean; $isDuplicate: boolean | null }>`
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid
    ${({ theme, $isDuplicate, $isFocus }) =>
      $isDuplicate === null && $isFocus ? theme.colors.grey_700 : theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 100%;
  height: 4.6rem;

  & > div.urlText {
    ${({ theme }) => theme.fonts.Body2_Regular};
    color: ${({ theme }) => theme.colors.grey_600};
  }

  & > svg {
    position: absolute;
    right: 1.2rem;
    transform-origin: 50% 50%;

    animation: rotate_image 5s linear infinite;

    @keyframes rotate_image {
      100% {
        transform: rotate(360deg);
      }
    }
  }

  &#failed {
    border-color: ${({ theme }) => theme.colors.red};
  }

  &#success {
    border-color: ${({ theme }) => theme.colors.green};
  }
`;
