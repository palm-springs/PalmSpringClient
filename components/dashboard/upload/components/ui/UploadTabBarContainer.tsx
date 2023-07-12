import React from 'react';
import { styled } from 'styled-components';

import { dashBoardTabType } from '@/types/dashboard';
interface UploadTabBarContainerProps {
  currentTab: dashBoardTabType;
  setCurrentTab: React.MouseEventHandler<HTMLButtonElement>;
}

const UploadTabBarContainer = (props: UploadTabBarContainerProps) => {
  const { currentTab, setCurrentTab } = props;

  return (
    <UploadTabBarUI>
      <UploadTabBarTextUI $currentTab={currentTab === 'all'} onClick={setCurrentTab}>
        전체
      </UploadTabBarTextUI>
      <UploadTabBarTextUI $currentTab={currentTab === 'dev'} onClick={setCurrentTab}>
        개발
      </UploadTabBarTextUI>
      <UploadTabBarTextUI $currentTab={currentTab === 'design'} onClick={setCurrentTab}>
        디자인
      </UploadTabBarTextUI>
      <UploadTabBarTextUI $currentTab={currentTab === 'plan'} onClick={setCurrentTab}>
        기획
      </UploadTabBarTextUI>
    </UploadTabBarUI>
  );
};

export default UploadTabBarContainer;

const UploadTabBarUI = styled.section`
  display: flex;
  gap: 2rem;
  margin-left: 4rem;

  height: 3.5rem;
`;

const UploadTabBarTextUI = styled.span<{ $currentTab: boolean }>`
  border-bottom: ${({ theme, $currentTab }) => ($currentTab ? `2px solid ${theme.colors.grey_950}` : 0)};
  height: 3.5rem;
  ${({ theme }) => theme.fonts.Body1_Semibold};
  color: ${({ theme, $currentTab }) => ($currentTab ? theme.colors.grey_900 : theme.colors.grey_600)};
`;
