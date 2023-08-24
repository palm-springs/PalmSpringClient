import React, { Dispatch, SetStateAction } from 'react';
import { useParams } from 'next/navigation';
import { styled } from 'styled-components';

import { PageListProps } from '@/types/dashboard';

interface NavSelectorContainerProps {
  setIsSelectorOpen: Dispatch<SetStateAction<boolean>>;
  // navSelectorContent: NavListProps[];
  newNavigationSelector: string;
  pageList: PageListProps[];
  setNewNavigationSelector: Dispatch<SetStateAction<string>>;
  newNavigationUrl: string;
  setNewNavigationUrl: Dispatch<SetStateAction<string>>;
  newNavigationName: string;
  setNewNavigationName: Dispatch<SetStateAction<string>>;
}

const NavSelectorContainer = (props: NavSelectorContainerProps) => {
  const {
    setIsSelectorOpen,
    setNewNavigationSelector,
    setNewNavigationUrl,
    pageList,
    newNavigationName,
    setNewNavigationName,
  } = props;

  // 페이지가 맞고 isDraft가 아닌 것
  const filteredPageList = pageList.filter(({ isDraft }) => !isDraft);

  return (
    <NavSelectorUI>
      <IndivContentUI
        type="button"
        onClick={() => {
          setNewNavigationUrl('');
          setNewNavigationSelector('직접 입력');
          setIsSelectorOpen((prev) => !prev);
        }}>
        직접 입력
      </IndivContentUI>
      {filteredPageList.map(({ id, title: name, pageUrl }) => (
        <IndivContentUI
          type="button"
          key={id}
          onClick={() => {
            console.log(name);
            setNewNavigationUrl(name);
            setNewNavigationName(name);
            setNewNavigationSelector(name);
            setIsSelectorOpen((prev) => !prev);
          }}>
          {name}
        </IndivContentUI>
      ))}
    </NavSelectorUI>
  );
};

export default NavSelectorContainer;

const NavSelectorUI = styled.section`
  display: flex;
  position: absolute;
  top: 8rem;
  left: 0;
  flex-direction: column;
  gap: 0.4rem;
  z-index: 20;
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.8rem;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.grey_0};
  padding: 0.8rem;
  width: 100%;
  max-height: 20.8rem;
  overflow: hidden;
`;

const IndivContentUI = styled.button`
  display: flex;
  transition: 0.3s ease-out;
  border: none;
  border-radius: 0.8rem;
  background: none;
  padding: 1.2rem 1.2rem 1.6rem 1.2rem;
  width: 100%;
  height: 3.75rem;
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_900};
  &:hover {
    background: ${({ theme }) => theme.colors.grey_200};
  }
`;
