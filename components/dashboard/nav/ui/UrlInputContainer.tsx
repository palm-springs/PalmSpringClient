import React, { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

import { ArrowDownIcon } from '@/public/icons';

interface ModalPortalContainerProps {
  setIsSelectorOpen: Dispatch<SetStateAction<boolean>>;
  // newNavigationSelector: string;
  // setNewNavigationSelector: Dispatch<SetStateAction<string>>;
  state: string;
  // setState: Dispatch<SetStateAction<string>>;
}

const UrlInputContainer = (props: ModalPortalContainerProps) => {
  const { setIsSelectorOpen, state } = props;

  return (
    <UrlInputUI>
      <div>
        <span>연결 URL</span>
        <span>페이지 또는 외부 웹사이트를 연결할 수 있습니다.</span>
      </div>
      <input type="text" placeholder="연결 URL" value={state} readOnly />
      <ArrowDown onClick={() => setIsSelectorOpen((prev) => !prev)} />
    </UrlInputUI>
  );
};

export default UrlInputContainer;

const UrlInputUI = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 0.8rem;
    span:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      ${({ theme }) => theme.fonts.Body2_Semibold};
      color: ${({ theme }) => theme.colors.grey_900};
    }
    span:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      ${({ theme }) => theme.fonts.Caption};
      color: ${({ theme }) => theme.colors.grey_700};
      &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.grey_700};
      }
    }
  }
  input {
    border: 1px solid ${({ theme }) => theme.colors.grey_400};
    border-radius: 0.8rem;
    padding: 1rem 1.2rem;
    width: 100%;
    height: 3.75rem;
    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.grey_700};
    }
  }
`;

const ArrowDown = styled(ArrowDownIcon)`
  position: absolute;
  top: 4.2rem;
  right: 1.4rem;
  cursor: pointer;
`;
