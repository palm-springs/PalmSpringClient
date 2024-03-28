'use client';
import { ForwardedRef, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

interface InputProps {
  children: ReactNode;
  value: string;
  setValue: (v: string) => void;
}

const Input = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { children, value, setValue } = props;

  let type;
  switch (children) {
    case '이메일':
      type = 'email';
      break;
    case '비밀번호':
    case '비밀번호 확인':
    case '새로운 비밀번호':
    case '새로운 비밀번호 확인':
      type = 'password';
      break;
  }
  return (
    <InputContainer>
      {children}
      <InputBorder
        value={value}
        type={type}
        pattern={type === 'email' ? '.+@example.com' : ''}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
};

export default forwardRef(Input);

const InputContainer = styled.label`
  ${({ theme }) => theme.fonts.Body3_Regular};

  display: flex;
  flex-direction: column;

  gap: 1rem;

  margin-bottom: 1.8rem;

  & > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    & > a {
      ${({ theme }) => theme.fonts.Caption};
      color: ${({ theme }) => theme.colors.grey_700};

      &:hover {
        text-decoration: underline;
      }
    }
  }
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
