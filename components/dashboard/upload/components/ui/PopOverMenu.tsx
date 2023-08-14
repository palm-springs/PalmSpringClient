'use client';

import React from 'react';
import { styled } from 'styled-components';

import { dashBoardPageType } from '@/types/dashboard';

interface PopOverMenuProps {
  onNavigateContentClick?: React.MouseEventHandler<HTMLButtonElement>;
  onDeleteButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  pathName: dashBoardPageType | 'dashboard';
}

const PopOverMenu = (props: PopOverMenuProps) => {
  const { onNavigateContentClick, pathName, onDeleteButtonClick } = props;

  const navigateContent = () => {
    switch (pathName) {
      case 'category':
        return '카테고리글 보러가기';
      case 'nav':
        return '해당 URL로 이동하기';
      default:
        return '새창에서 보기';
    }
  };

  return (
    <PopOverMenuUI className="pop_over_menu">
      <button onClick={onNavigateContentClick}>{navigateContent()}</button>
      <button>수정하기</button>
      <button onClick={onDeleteButtonClick}>삭제하기</button>
    </PopOverMenuUI>
  );
};

export default PopOverMenu;

const PopOverMenuUI = styled.article`
  display: flex;
  position: absolute;
  top: 4.2rem;
  right: 0;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  z-index: 100;
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.8rem;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.grey_0};
  padding: 0.8rem;
  width: fit-content;
  height: 13.1rem;
  :nth-child(3) {
    color: ${({ theme }) => theme.colors.red};
  }
  button {
    display: flex;
    align-items: center;
    ${({ theme }) => theme.fonts.Body3_Regular};
    transition-duration: 0.3s ease-out;
    border: none;
    border-radius: 0.8rem;
    background: none;
    cursor: pointer;
    padding: 0 1rem;
    width: 100%;
    height: 4.2rem;
    &:hover {
      background: ${({ theme }) => theme.colors.grey_100};
    }
  }
`;
