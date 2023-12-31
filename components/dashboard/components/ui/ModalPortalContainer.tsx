import React, { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

interface ModalPortalContainerProps {
  title: string;
  placeholder: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

const ModalPortalContainer = (props: ModalPortalContainerProps) => {
  const { title, placeholder, state, setState } = props;

  return (
    <ModalPortalUI>
      <span>{title}</span>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          setState(e.target.value);
        }}
        value={state}
      />
    </ModalPortalUI>
  );
};

export default ModalPortalContainer;

const ModalPortalUI = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;
  span {
    margin-top: 1.2rem;
    margin-bottom: 0.8rem;
    ${({ theme }) => theme.fonts.Body2_Semibold};
    color: ${({ theme }) => theme.colors.grey_900};
  }
  input {
    ${({ theme }) => theme.fonts.Body2_Regular};
    border: 1px solid ${({ theme }) => theme.colors.grey_400};
    border-radius: 0.8rem;
    padding: 1rem 1.2rem;
    width: 100%;
    height: 4.6rem;
    &::placeholder {
      ${({ theme }) => theme.fonts.Body2_Regular};
      color: ${({ theme }) => theme.colors.grey_600};
    }
    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.grey_300};
    }
  }
`;
