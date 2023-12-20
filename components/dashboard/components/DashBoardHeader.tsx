'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import { articleDataState, pageDataState } from '@/components/editor/states/atom';
import mapPageType2HeaderInfo from '@/constants/mapPageType2HeaderInfo';
import useGetLastPathName from '@/hooks/useGetLastPathName';
import usePerMissionPolicy from '@/hooks/usePermissionPolicy';
import { dashBoardPageType } from '@/types/dashboard';
import checkRenderDashboardPermissionButton from '@/utils/checkRenderDashboardPermissionButton';

import { dashBoardModalState } from '../state/modalState';

import DashBoardHeaderContainer from './ui/DashBoardHeaderContainer';
import HeaderContainer from './ui/HeaderContainer';

const DashBoardHeader = () => {
  const pathName = useGetLastPathName() as dashBoardPageType;

  const router = useRouter();

  const { team } = useParams();

  const { title, buttonInnerText, onButtonClickActionName } = mapPageType2HeaderInfo[pathName];

  const permissionPolicyChecker = usePerMissionPolicy();

  const { renderHeaderButton: isRenderHeaderButton } = checkRenderDashboardPermissionButton(
    pathName,
    permissionPolicyChecker,
  );

  const setModalStateValue = useSetRecoilState(dashBoardModalState);

  const setArticleDataState = useSetRecoilState(articleDataState);

  const setPageDataState = useSetRecoilState(pageDataState);

  const handleHeaderButtonClickEvent = () => {
    onButtonClickActionName && setModalStateValue(onButtonClickActionName);
    switch (pathName) {
      case 'blogdirectnav':
      case 'blogconfignav':
        return;
      case 'upload':
      case 'tempsaved':
        router.push(`/${team}/editor/article`);
        setArticleDataState((prev) => ({
          ...prev,
          title: '',
        }));
        return;
      case 'page':
        router.push(`/${team}/editor/page`);
        setPageDataState((prev) => ({
          ...prev,
          title: '',
        }));
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
