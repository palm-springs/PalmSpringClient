'use client';

import React from 'react';
import { styled } from 'styled-components';

import { CharmMenuMeatballIcon } from '@/public/icons';

interface UploadContentProps {
  content: string;
  tabType?: string;
  author: string;
  position: string; // 아마 팀별 직무가 팀마다 다를 수 있으므로 나중에 서버에서 타입을 받아올 수 있다면 그거로 지정해줍시다.
  createdAt: string;
  onTitleClick: React.MouseEventHandler<HTMLButtonElement>;
  onMeatBallClick: React.MouseEventHandler<HTMLButtonElement>;
}

const UploadContentContainer = (props: UploadContentProps) => {
  const { content, tabType, author, position, createdAt, onTitleClick, onMeatBallClick } = props;

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
      <MenuBtn onClick={onMeatBallClick} />
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
`;
