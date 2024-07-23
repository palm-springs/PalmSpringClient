'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

import { articleDataState, pageDataState } from '@/components/editor/states/atom';
import mapPageType2HeaderInfo from '@/constants/mapPageType2HeaderInfo';
import useGetLastPathName from '@/hooks/useGetLastPathName';
import usePerMissionPolicy from '@/hooks/usePermissionPolicy';
import { dashBoardPageType } from '@/types/dashboard';
import checkRenderPermissionButton from '@/utils/checkRenderPermissionButton';
import { removeDraftContentData } from '@/utils/removeContentData';

import { dashBoardModalState } from '../state/modalState';

import DashBoardHeaderContainer from './ui/DashBoardHeaderContainer';
import HeaderContainer from './ui/HeaderContainer';

const DashBoardHeader = () => {
  const pathName = useGetLastPathName() as dashBoardPageType;

  const router = useRouter();

  const { team } = useParams();

  const { title, explanation, buttonInnerText, onButtonClickActionName } = mapPageType2HeaderInfo[pathName];

  const permissionPolicyChecker = usePerMissionPolicy();

  const { renderHeaderButton: isRenderHeaderButton } = checkRenderPermissionButton(pathName, permissionPolicyChecker);

  const setModalStateValue = useSetRecoilState(dashBoardModalState);

  const resetPageDataState = useResetRecoilState(pageDataState);

  const resetArticleDataState = useResetRecoilState(articleDataState);

  const handleHeaderButtonClickEvent = () => {
    onButtonClickActionName && setModalStateValue(onButtonClickActionName);
    switch (pathName) {
      case 'blogdirectnav':
      case 'blogconfignav':
        return;
      case 'upload':
      case 'tempsaved':
        resetArticleDataState();
        removeDraftContentData();
        router.push(`/${team}/editor/article`);
        return;
      case 'page':
        resetPageDataState();
        removeDraftContentData();
        router.push(`/${team}/editor/page`);
        return;
      default:
        return;
    }
  };

  return (
    <DashBoardHeaderContainer>
      <HeaderContainer
        title={title}
        explanation={explanation}
        buttonInnerText={buttonInnerText}
        isRenderHeaderButton={isRenderHeaderButton}
        onButtonClick={handleHeaderButtonClickEvent}
      />
    </DashBoardHeaderContainer>
  );
};

export default DashBoardHeader;
