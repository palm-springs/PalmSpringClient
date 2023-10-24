import React, { Dispatch, SetStateAction, useState } from 'react';
import { useParams } from 'next/navigation';

import { useGetNavList, useGetPageList } from '@/hooks/dashboard';

import NavSelectorContainer from './ui/NavSelectorContainer';
import NavUrlInputContainer from './ui/NavUrlInputContainer';
import TextInput from './ui/TextInput';
import UrlInputContainer from './ui/UrlInputContainer';

interface NavUrlInputProps {
  newNavigationSelector: string;
  setNewNavigationSelector: Dispatch<SetStateAction<string>>;
  newNavigationUrl: string;
  setNewNavigationUrl: Dispatch<SetStateAction<string>>;
  newNavigationName: string;
  setNewNavigationName: Dispatch<SetStateAction<string>>;
}

const NavUrlInput = (props: NavUrlInputProps) => {
  const { team: blogUrl } = useParams();

  const {
    newNavigationSelector,
    setNewNavigationSelector,
    newNavigationUrl,
    setNewNavigationUrl,
    newNavigationName,
    setNewNavigationName,
  } = props;

  const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false);

  const pageList = useGetPageList(blogUrl);

  return (
    <NavUrlInputContainer>
      <UrlInputContainer setIsSelectorOpen={setIsSelectorOpen} state={newNavigationSelector} />
      {newNavigationSelector === '직접 입력' && <TextInput state={newNavigationUrl} setState={setNewNavigationUrl} />}
      {isSelectorOpen && pageList && (
        <NavSelectorContainer
          setIsSelectorOpen={setIsSelectorOpen}
          newNavigationSelector={newNavigationSelector}
          setNewNavigationSelector={setNewNavigationSelector}
          pageList={pageList.data}
          newNavigationUrl={newNavigationUrl}
          setNewNavigationUrl={setNewNavigationUrl}
          newNavigationName={newNavigationName}
          setNewNavigationName={setNewNavigationName}
        />
      )}
    </NavUrlInputContainer>
  );
};

export default NavUrlInput;
