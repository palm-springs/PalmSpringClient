'use client';
import styled from 'styled-components';

import { RequiredCircleIcon } from '@/public/icons';

import InputTitle from './InputTitle';
interface TextInputFormProps {
  type: string;
  text: string;
  children: React.ReactNode;
}

const TextInputForm = (props: TextInputFormProps) => {
  const { type, text, children } = props;

  return (
    <Label>
      <TitleContainer>
        <InputTitle>{text}</InputTitle>
        {(type === 'id' || type === 'name') && <RequiredIcon className={type} />}
      </TitleContainer>
      <InputContainer className={type}>{children}</InputContainer>
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

const RequiredIcon = styled(RequiredCircleIcon)`
  &.id {
    margin-top: 0.2rem;
  }
`;

// text input 입력  컨테이너
const InputContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
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
