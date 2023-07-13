'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

import useGetLastPathName from '@/hooks/useGetLastPathName';
import { CharmMenuMeatballIcon, IcClose24Icon } from '@/public/icons';

import { PickContextPropsType } from '../../context/dashboardContext';
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
import TabType from './TabType';
import Url from './Url';

interface DashBoardContentContainerProps {
  contentObject: DashBoardContentProps;
  onMenuButtonClick: Dispatch<SetStateAction<boolean>>;
  isPopOverMenuOpen: boolean;
  modalOpenContentId: PickContextPropsType<'modalOpenContentId'>;
  setModalOpenContentId: (value: PickContextPropsType<'modalOpenContentId'>) => void;
}

const DashBoardContentContainer = (props: DashBoardContentContainerProps) => {
  const {
    contentObject: {
      id,
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
    onMenuButtonClick,
    modalOpenContentId,
    setModalOpenContentId,
  } = props;

  const isModalOpen = modalOpenContentId === id;

  const pathName = useGetLastPathName();
  // 날짜 포맷팅은 나중에 raw 데이터가 어떻게 날아오는지 확인하고 합시다!
  return (
    <DashBoardContentUI>
      {email && <Email email={email} />}
      {content && <Content onTitleClick={onTitleClick} content={content} />}
      {url && <Url url={url} />}
      {tabType && <TabType tabType={tabType} />}
      {author && <Author author={author} />}
      {position && <Position position={position} />}
      {description && <Description description={description} />}
      {draft !== undefined ? <Draft draft={draft} /> : <></>}
      {createdAt && <CreatedAt createdAt={createdAt} />}
      {newsLetter && <NewsLetter newsLetter={newsLetter} />}
      {pathName === 'subscriber' ? (
        <BtnContainer>
          <IcClose24Icon />
        </BtnContainer>
      ) : (
        <BtnContainer
          onClick={() => {
            onMenuButtonClick((prev) => !prev);
            if (modalOpenContentId === id) {
              setModalOpenContentId('');
            } else {
              setModalOpenContentId(id);
            }
          }}
        />
      )}
      {isModalOpen && <PopOverMenu pathName={pathName} />}
    </DashBoardContentUI>
  );
};

export default DashBoardContentContainer;

const DashBoardContentUI = styled.article`
  display: flex;
  position: relative;
  align-items: center;
  transition-duration: 0.3s ease-out;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_300};
  width: 100%;
  height: 5.2rem;

  &:hover {
    background: ${({ theme }) => theme.colors.grey_100};
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  span {
    white-space: nowrap;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  align-items: center;
  justify-content: center;
  transition-duration: 0.3s ease-out;
  margin-right: 0.6rem;
  border-radius: 0.4rem;
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  &:hover {
    background: ${({ theme }) => theme.colors.grey_300};
  }
`;
