'use client';

import React from 'react';
import { styled } from 'styled-components';

import { UploadTabBarProps } from '../UploadTabBar';
interface UploadTabBarContainerProps {
  categoryProps: UploadTabBarProps;
}

const UploadTabBarContainer = (props: UploadTabBarContainerProps) => {
  const {
    categoryProps: { category, setCategory },
  } = props;

  return (
    <UploadTabBarUI>
      <UploadTabBarTextUI $currentTab={category === 'all'} onClick={() => setCategory('all')}>
        전체
      </UploadTabBarTextUI>
      <UploadTabBarTextUI $currentTab={category === 'dev'} onClick={() => setCategory('dev')}>
        개발
      </UploadTabBarTextUI>
      <UploadTabBarTextUI $currentTab={category === 'design'} onClick={() => setCategory('design')}>
        디자인
      </UploadTabBarTextUI>
      <UploadTabBarTextUI $currentTab={category === 'plan'} onClick={() => setCategory('plan')}>
        기획
      </UploadTabBarTextUI>
      <UploadTabBarTextUI $currentTab={category === 'culture'} onClick={() => setCategory('culture')}>
        문화
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
  transition-duration: 0.3s ease-out;
  border-bottom: ${({ theme, $currentTab }) => ($currentTab ? `2px solid ${theme.colors.grey_950}` : 0)};
  ${({ theme }) => theme.fonts.Body1_Semibold};
  cursor: pointer;
  height: 3.5rem;
  color: ${({ theme, $currentTab }) => ($currentTab ? theme.colors.grey_900 : theme.colors.grey_600)};
  &:hover {
    color: ${({ theme, $currentTab }) => ($currentTab ? theme.colors.grey_800 : theme.colors.grey_700)};
  }
`;
