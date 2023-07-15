import React, { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

interface NavSelectorContainerProps {
  navSelectorContent: NavListProps[];
  newNavigationUrl: string;
  setNewNavigationUrl: Dispatch<SetStateAction<string>>;
}

const NavSelectorContainer = (props: NavSelectorContainerProps) => {
  const { navSelectorContent, newNavigationUrl, setNewNavigationUrl } = props;

  const filteredPageList = navSelectorContent.filter(({ isPage }) => isPage);

  const nonFilteredPageList = navSelectorContent.filter(({ isPage }) => !isPage);

  return (
    <NavSelectorUI>
      <IndivContentUI type="button" onClick={() => setNewNavigationUrl('직접 입력')}>
        직접 입력
      </IndivContentUI>
      {filteredPageList.map(({ id, name, navUrl }) => (
        <IndivContentUI type="button" key={id} onClick={() => setNewNavigationUrl(navUrl)}>
          {name}
        </IndivContentUI>
      ))}
      {nonFilteredPageList.map(({ id, name, navUrl }) => (
        <IndivContentUI type="button" key={id} onClick={() => setNewNavigationUrl(navUrl)}>
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
`;

const IndivContentUI = styled.button`
  display: flex;
  border: none;
  background: none;
  padding: 1.2rem 1.2rem 1.6rem 1.2rem;
  width: 100%;
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_900};
`;
