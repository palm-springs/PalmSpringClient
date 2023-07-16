import React, { Dispatch, SetStateAction, useState } from 'react';

import { useGetNavList } from '@/hooks/dashboard';

import NavSelectorContainer from './ui/NavSelectorContainer';
import NavUrlInputContainer from './ui/NavUrlInputContainer';
import TextInput from './ui/TextInput';
import UrlInputContainer from './ui/UrlInputContainer';

interface NavUrlInputProps {
  newNavigationSelector: string;
  setNewNavigationSelector: Dispatch<SetStateAction<string>>;
  newNavigationUrl: string;
  setNewNavigationUrl: Dispatch<SetStateAction<string>>;
}

const NavUrlInput = (props: NavUrlInputProps) => {
  const blogUrl = 'Palms';

  const { newNavigationSelector, setNewNavigationSelector, newNavigationUrl, setNewNavigationUrl } = props;

  const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false);

  const navList = useGetNavList(blogUrl);

  if (!navList) return <div>로더</div>;

  return (
    <NavUrlInputContainer>
      <UrlInputContainer
        setIsSelectorOpen={setIsSelectorOpen}
        state={newNavigationSelector}
        // setState={setNewNavigationSelector}
      />
      {newNavigationSelector === '직접 입력' && <TextInput state={newNavigationUrl} setState={setNewNavigationUrl} />}
      {isSelectorOpen && (
        <NavSelectorContainer
          setIsSelectorOpen={setIsSelectorOpen}
          newNavigationSelector={newNavigationSelector}
          setNewNavigationSelector={setNewNavigationSelector}
          navSelectorContent={navList.data}
          newNavigationUrl={newNavigationUrl}
          setNewNavigationUrl={setNewNavigationUrl}
        />
      )}
    </NavUrlInputContainer>
  );
};

export default NavUrlInput;