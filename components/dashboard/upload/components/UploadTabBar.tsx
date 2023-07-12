'use client';

import React from 'react';

import UploadTabBarContainer from './ui/UploadTabBarContainer';

const UploadTabBar = () => {
  const setCurrentTab = (e: any): void => {
    return;
  };
  return <UploadTabBarContainer currentTab="all" setCurrentTab={setCurrentTab} />;
};

export default UploadTabBar;
