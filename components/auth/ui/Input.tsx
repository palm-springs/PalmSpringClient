'use client';
import { ForwardedRef, forwardRef, ReactNode, useState } from 'react';
import styled from 'styled-components';

import checkEmailForm from '@/utils/checkEmailForm';

import Message from './Message';

interface InputProps {
  children: ReactNode;
  value?: string;
  setValue?: (v: string) => void;
  type: string;
}

const Input = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { children, value, setValue, type } = props;
  const [isInvalid, setIsInvalid] = useState(false);

  const handleOnBlur = (e) => {
    if (!ref) return;

    if (type === 'email') {
      if (!checkEmailForm(e.target.value)) setIsInvalid(true);
      else setIsInvalid(false);
    } else {
      if (e.target.value === '') setIsInvalid(true);
      else setIsInvalid(false);
    }
  };
  return (
    <InputContainer>
      {children}
      <InputBorder
        value={value}
        type={type}
        pattern={type === 'email' ? '.+@example.com' : ''}
        onChange={(e) => {
          if (!setValue) return;
          setValue(e.target.value);
        }}
        ref={ref}
        onBlur={handleOnBlur}
        $isInvalid={isInvalid}
      />
      {isInvalid && <Message>{type === 'email' ? '유효한 이메일을 입력해주세요' : '비밀번호를 입력해주세요'}</Message>}
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

const InputBorder = styled.input<{ $isInvalid: boolean }>`
  ${({ theme }) => theme.fonts.Body3_Regular};
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme, $isInvalid }) => ($isInvalid ? theme.colors.red : theme.colors.grey_400)};

  border-radius: 1.6rem;

  background-color: ${({ theme, $isInvalid }) => $isInvalid && theme.colors.red_alpha_20};

  padding: 0 2.4rem;
  width: 100%;
  height: 5.6rem;
  color: ${({ theme, $isInvalid }) => $isInvalid && theme.colors.red_hover};

  &:focus {
    outline: none;
  }
`;
