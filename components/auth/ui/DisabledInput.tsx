'use client';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface DisabledInputProps {
  children: ReactNode;
  value: string;
}

const DisabledInput = (props: DisabledInputProps) => {
  const { children, value } = props;
  return (
    <InputContainer>
      {children}
      <Input disabled value={value} />
    </InputContainer>
  );
};

export default DisabledInput;

const InputContainer = styled.label`
  ${({ theme }) => theme.fonts.Body3_Regular};

  display: flex;
  flex-direction: column;

  gap: 1rem;

  margin-bottom: 1.8rem;
`;

const Input = styled.input`
  ${({ theme }) => theme.fonts.Body3_Regular};
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.grey_300};

  padding: 0 2.4rem;
  width: 100%;
  height: 5.6rem;
`;
