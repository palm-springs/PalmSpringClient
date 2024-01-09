import React, { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

interface TextInputProps {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

const TextInput = (props: TextInputProps) => {
  const { state, setState } = props;

  return (
    <TextInputContainer>
      <TextInputUI
        type="text"
        placeholder="SNS, 채용 공고 등 링크 입력"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
        value={state}
      />
    </TextInputContainer>
  );
};

export default TextInput;

const TextInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
  div {
    color: ${({ theme }) => theme.colors.grey_700};
    ${({ theme }) => theme.fonts.Body2_Regular};
  }
`;

const TextInputUI = styled.input`
  ${({ theme }) => theme.fonts.Body2_Regular};
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 100%;
  height: 3.75rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;
