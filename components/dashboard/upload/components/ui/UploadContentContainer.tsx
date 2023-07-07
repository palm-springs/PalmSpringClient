'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

import { CharmMenuMeatballIcon } from '@/public/icons';

import { UploadContentProps } from '../UploadContent';

import PopOverMenu from './PopOverMenu';

interface UploadContentContainerProps extends UploadContentProps {
  onMeatBallClick: Dispatch<SetStateAction<boolean>>;
  isPopOverMenuOpen: boolean;
}

const UploadContentContainer = (props: UploadContentContainerProps) => {
  const { content, tabType, author, position, createdAt, onTitleClick, onMeatBallClick, isPopOverMenuOpen } = props;
  // 날짜 포맷팅은 나중에 raw 데이터가 어떻게 날아오는지 확인하고 합시다!
  return (
    <UploadContentUI>
      <button id="content" onClick={onTitleClick}>
        {content}
      </button>
      <span id="tabType">{tabType}</span>
      <span id="author">{author}</span>
      <span id="position">{position}</span>
      <span id="createdAt">{createdAt}</span>
      <MenuBtn
        onClick={() => {
          onMeatBallClick((prev) => !prev);
        }}
      />
      {isPopOverMenuOpen ? <PopOverMenu /> : <></>}
    </UploadContentUI>
  );
};

export default UploadContentContainer;

const UploadContentUI = styled.article`
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_300};
  width: 100%;
  height: 5.2rem;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  #content {
    margin-right: 5vw;
    width: 40vw;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${({ theme }) => theme.fonts.Body3_Semibold};
    color: ${({ theme }) => theme.colors.grey_900};
  }

  #tabType {
    display: inline-flex;
    gap: 1rem;
    align-items: center;
    margin-right: 2vw;
    ${({ theme }) => theme.fonts.Body3_Regular};
    border: 1px solid ${({ theme }) => theme.colors.grey_400};
    border-radius: 2rem;
    padding: 0.4rem 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #author {
    margin-right: 2vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ theme }) => theme.colors.grey_900};
  }

  #position {
    margin-right: 3vw;
    width: 8.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ theme }) => theme.colors.grey_700};
  }

  #createdAt {
    width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ theme }) => theme.colors.grey_900};
  }
`;

const MenuBtn = styled(CharmMenuMeatballIcon)`
  position: absolute;
  right: 0;
  cursor: pointer;
`;
