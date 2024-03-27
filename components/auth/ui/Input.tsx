'use client';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Input = ({ children }: { children: ReactNode }) => {
  let type;
  switch (children) {
    case '이메일':
      type = 'text';

      break;
    case '비밀번호':
      type = 'password';
      break;
  }
  return (
    <InputContainer>
      {children}
      <InputBorder type={type} />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.label`
  ${({ theme }) => theme.fonts.Body3_Regular};

  display: flex;
  flex-direction: column;

  gap: 1rem;

  margin-bottom: 1.8rem;
`;

const InputBorder = styled.input`
  ${({ theme }) => theme.fonts.Body3_Regular};
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};

  border-radius: 1.6rem;

  padding: 0 2.4rem;
  width: 100%;
  height: 5.6rem;

  &:focus {
    outline: none;
  }
`;
