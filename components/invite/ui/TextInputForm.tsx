'use client';
import styled from 'styled-components';

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
    <Label>
      <InputTitle>
        {text}
        {(type === 'name' || type === 'id') && <div className={type} />}
      </InputTitle>
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

// text input 입력  컨테이너
const InputContainer = styled.div<{ isFocus: boolean }>`
  border: 1px solid;
  border-radius: 0.8rem;
  border-color: ${({ theme, $isFocus }) => ($isFocus ? theme.colors.grey_700 : theme.colors.grey_400)};
  padding: 1rem 1.2rem;
  width: 100%;
  height: 4.6rem;
  &.id {
    display: flex;
    align-items: center;
  }
  &.description {
    height: 8.6rem;
  }
  & > div {
    ${({ theme }) => theme.fonts.Body2_Regular};
    color: ${({ theme }) => theme.colors.grey_600};
  }
`;
