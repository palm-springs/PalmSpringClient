'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

import { CharmMenuMeatballIcon } from '@/public/icons';

import PopOverMenu from '../../upload/components/ui/PopOverMenu';
import { DashBoardContentProps } from '../DashBoardContent';

import Author from './Author';
import Content from './Content';
import CreatedAt from './CreatedAt';
import Description from './Description';
import Draft from './Draft';
import Position from './Position';

interface DashBoardContentContainerProps {
  contentObject: DashBoardContentProps;
  onMeatBallClick: Dispatch<SetStateAction<boolean>>;
  isPopOverMenuOpen: boolean;
}

const DashBoardContentContainer = (props: DashBoardContentContainerProps) => {
  const {
    contentObject: { content, url, tabType, draft, author, description, position, createdAt, onTitleClick },
    onMeatBallClick,
    isPopOverMenuOpen,
  } = props;
  // 날짜 포맷팅은 나중에 raw 데이터가 어떻게 날아오는지 확인하고 합시다!
  return (
    <DashBoardContentUI>
      <Content onTitleClick={onTitleClick} content={content} />
      {url && <span id="url">{url}</span>}
      {tabType && <span id="tabType">{tabType}</span>}
      {author && <Author author={author} />}
      {position && <Position position={position} />}
      {description && <Description description={description} />}
      {draft !== undefined ? <Draft draft={draft} /> : <></>}
      {createdAt && <CreatedAt createdAt={createdAt} />}
      <MenuBtn
        onClick={() => {
          onMeatBallClick((prev) => !prev);
        }}
      />
      {isPopOverMenuOpen ? <PopOverMenu /> : <></>}
    </DashBoardContentUI>
  );
};

export default DashBoardContentContainer;

const DashBoardContentUI = styled.article`
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

  #url {
    min-width: 16.4rem;
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ theme }) => theme.colors.grey_700};
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
