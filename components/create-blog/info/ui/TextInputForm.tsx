'use client';
import styled from 'styled-components';

import InputTitle from './InputTitle';
interface TextInputFormProps {
  type: string;
  children: React.ReactNode;
  isFocus: boolean;
}

const TextInputForm = (props: TextInputFormProps) => {
  const { type, children, isFocus } = props;

  return (
    <Label>
      <TitleContainer>
        <InputTitle>블로그 {type}</InputTitle>
        {type === '주소' && <span>영어문자와 숫자, 언더바(_)만 사용할 수 있어요</span>}
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

// text input 입력  컨테이너
const InputContainer = styled.div<{ $isFocus: boolean }>`
  border: 1px solid ${({ theme, $isFocus }) => ($isFocus ? theme.colors.grey_700 : theme.colors.grey_400)};

  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 100%;
  height: 4.6rem;

  &.주소 {
    display: flex;
    align-items: center;
  }

  &.설명 {
    height: 7.9rem;
  }

  & > div {
    ${({ theme }) => theme.fonts.Body2_Regular};
    color: ${({ theme }) => theme.colors.grey_600};
  }
`;
