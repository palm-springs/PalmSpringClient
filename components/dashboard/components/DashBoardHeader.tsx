import React from 'react';

import mapPageType2HeaderInfo from '@/constants/mapPageType2HeaderInfo';
import useGetLastPathName from '@/hooks/useGetLastPathName';
import { dashBoardPageType } from '@/types/dashboard';

import DashBoardHeaderContainer from './ui/DashBoardHeaderContainer';
import HeaderContainer from './ui/HeaderContainer';

const DashBoardHeader = () => {
  const pathName = useGetLastPathName() as dashBoardPageType;

  const { title, buttonInnerText, onButtonClick } = mapPageType2HeaderInfo[pathName];

  return (
    <DashBoardHeaderContainer>
      <HeaderContainer title={title} buttonInnerText={buttonInnerText} onButtonClick={onButtonClick} />
    </DashBoardHeaderContainer>
  );
};

export default DashBoardHeader;
