import React, { Dispatch, SetStateAction, useState } from 'react';

import { useGetNavList } from '@/hooks/dashboard';

import NavSelectorContainer from './ui/NavSelectorContainer';
import NavUrlInputContainer from './ui/NavUrlInputContainer';
import TextInput from './ui/TextInput';
import UrlInputContainer from './ui/UrlInputContainer';

interface NavUrlInputProps {
  newNavigationUrl: string;
  setNewNavigationUrl: Dispatch<SetStateAction<string>>;
}

const NavUrlInput = (props: NavUrlInputProps) => {
  const blogUrl = 'Palms';

  const { newNavigationUrl, setNewNavigationUrl } = props;

  const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false);

  const navList = useGetNavList(blogUrl);

  if (!navList) return <div>로더</div>;

  return (
    <NavUrlInputContainer>
      <UrlInputContainer
        setIsSelectorOpen={setIsSelectorOpen}
        state={newNavigationUrl}
        setState={setNewNavigationUrl}
      />
      {newNavigationUrl === '직접 입력' && <TextInput state={newNavigationUrl} setState={setNewNavigationUrl} />}
      {isSelectorOpen && (
        <NavSelectorContainer
          navSelectorContent={navList.data}
          newNavigationUrl={newNavigationUrl}
          setNewNavigationUrl={setNewNavigationUrl}
        />
      )}
    </NavUrlInputContainer>
  );
};

export default NavUrlInput;
