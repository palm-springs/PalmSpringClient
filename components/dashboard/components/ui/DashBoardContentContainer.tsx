'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

import useGetLastPathName from '@/hooks/useGetLastPathName';
import { CharmMenuMeatballIcon, IcClose24Icon } from '@/public/icons';

import PopOverMenu from '../../upload/components/ui/PopOverMenu';
import { DashBoardContentProps } from '../DashBoardContent';

import Author from './Author';
import Content from './Content';
import CreatedAt from './CreatedAt';
import Description from './Description';
import Draft from './Draft';
import Email from './Email';
import NewsLetter from './NewsLetter';
import Position from './Position';
import Url from './Url';

interface DashBoardContentContainerProps {
  contentObject: DashBoardContentProps;
  onMeatBallClick: Dispatch<SetStateAction<boolean>>;
  isPopOverMenuOpen: boolean;
}

const DashBoardContentContainer = (props: DashBoardContentContainerProps) => {
  const {
    contentObject: {
      email,
      content,
      url,
      tabType,
      draft,
      author,
      description,
      position,
      createdAt,
      onTitleClick,
      newsLetter,
    },
    onMeatBallClick,
    isPopOverMenuOpen,
  } = props;

  const pathName = useGetLastPathName();
  // 날짜 포맷팅은 나중에 raw 데이터가 어떻게 날아오는지 확인하고 합시다!
  return (
    <DashBoardContentUI>
      {email && <Email email={email} />}
      {content && <Content onTitleClick={onTitleClick} content={content} />}
      {url && <Url url={url} />}
      {tabType && <span id="tabType">{tabType}</span>}
      {author && <Author author={author} />}
      {position && <Position position={position} />}
      {description && <Description description={description} />}
      {draft !== undefined ? <Draft draft={draft} /> : <></>}
      {createdAt && <CreatedAt createdAt={createdAt} />}
      {newsLetter && <NewsLetter newsLetter={newsLetter} />}
      {pathName === 'subscriber' ? (
        <DeleteBtn />
      ) : (
        <MenuBtn
          onClick={() => {
            onMeatBallClick((prev) => !prev);
          }}
        />
      )}
      {isPopOverMenuOpen ? <PopOverMenu pathName={pathName} /> : <></>}
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

const DeleteBtn = styled(IcClose24Icon)`
  position: absolute;
  right: 0;
  cursor: pointer;
`;