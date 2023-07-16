import React, { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

interface TextInputProps {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

const TextInput = (props: TextInputProps) => {
  const { state, setState } = props;

  return (
    <TextInputUI
      type="text"
      placeholder="SNS, 채용 공고 등 링크 입력"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
      value={state}
    />
  );
};

export default TextInput;

const TextInputUI = styled.input`
  margin-top: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  ${({ theme }) => theme.fonts.Body2_Regular};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 100%;
`;
