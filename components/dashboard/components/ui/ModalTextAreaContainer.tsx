import React, { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

interface ModalPortalContainerProps {
  title: string;
  placeholder: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

const ModalTextAreaContainer = (props: ModalPortalContainerProps) => {
  const { title, placeholder, state, setState } = props;

  return (
    <ModalTextAreaUI>
      <span>{title}</span>
      <textarea placeholder={placeholder} onChange={(e) => setState(e.target.value)} value={state} />
    </ModalTextAreaUI>
  );
};

export default ModalTextAreaContainer;

const ModalTextAreaUI = styled.article`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  width: 100%;
  span {
    margin-bottom: 0.8rem;
    ${({ theme }) => theme.fonts.Body2_Semibold};
    color: ${({ theme }) => theme.colors.grey_900};
  }
  textarea {
    border: 1px solid ${({ theme }) => theme.colors.grey_400};
    border-radius: 0.8rem;
    padding: 1rem 1.2rem;
    width: 100%;
    min-height: 7.2rem;
    resize: none;
    &::placeholder {
      ${({ theme }) => theme.fonts.Body2_Regular};
      color: ${({ theme }) => theme.colors.grey_600};
    }
  }
`;
