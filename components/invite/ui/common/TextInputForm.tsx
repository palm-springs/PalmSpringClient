'use client';
import styled from 'styled-components';

import { RequiredCircleIcon } from '@/public/icons';

import InputTitle from './InputTitle';
interface TextInputFormProps {
  type: string;
  text: string;
  children: React.ReactNode;
  isFocus: boolean;
}

const TextInputForm = (props: TextInputFormProps) => {
  const { type, text, children, isFocus } = props;

  return (
    <Label className={type}>
      <TitleContainer>
        <InputTitle>{text}</InputTitle>
        {type === 'name' && <RequiredCircleIcon />}
      </TitleContainer>
      <InputContainer className={type} $isFocus={isFocus}>
        {children}
      </InputContainer>
    </Label>
  );
};

export default TextInputForm;

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

// text input 입력  컨테이너
const InputContainer = styled.div<{ $isFocus: boolean }>`
  position: relative;
  border: 1px solid ${({ theme, $isFocus }) => ($isFocus ? theme.colors.grey_700 : theme.colors.grey_400)};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 100%;
  height: 4.6rem;

  &.description {
    height: 8.6rem;
  }
`;
