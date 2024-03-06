'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

import { articleDataState, pageDataState } from '@/components/editor/states/atom';
import { IS_FIRST_DRAFT_CLICK } from '@/constants/editor';
import mapPageType2HeaderInfo from '@/constants/mapPageType2HeaderInfo';
import useGetLastPathName from '@/hooks/useGetLastPathName';
import usePerMissionPolicy from '@/hooks/usePermissionPolicy';
import { dashBoardPageType } from '@/types/dashboard';
import checkRenderPermissionButton from '@/utils/checkRenderPermissionButton';

import { dashBoardModalState } from '../state/modalState';

import DashBoardHeaderContainer from './ui/DashBoardHeaderContainer';
import HeaderContainer from './ui/HeaderContainer';

const DashBoardHeader = () => {
  const pathName = useGetLastPathName() as dashBoardPageType;

  const router = useRouter();

  const { team } = useParams();

  // sessionStorage
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

  const { title, buttonInnerText, onButtonClickActionName } = mapPageType2HeaderInfo[pathName];

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
        sessionStorage?.removeItem(IS_FIRST_DRAFT_CLICK);
        router.push(`/${team}/editor/article`);
        return;
      case 'page':
        resetPageDataState();
        sessionStorage?.removeItem(IS_FIRST_DRAFT_CLICK);
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
        buttonInnerText={buttonInnerText}
        isRenderHeaderButton={isRenderHeaderButton}
        onButtonClick={handleHeaderButtonClickEvent}
      />
    </DashBoardHeaderContainer>
  );
};

export default DashBoardHeader;
