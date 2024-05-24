'use client';

import React, { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import { useParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetNavList } from '@/hooks/dashboard';
import { NavListProps } from '@/types/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';
import LoadingContainer from '../LoadingContainer';
import { dashBoardModalState } from '../state/modalState';

import IndivNavDashboardContent from './IndivNavDashboardContent';

export let IndivNavContentInstance: NavListProps;

const NavContentList = () => {
  const { team: blogUrl } = useParams();

  const data = useGetNavList(blogUrl as string);

  const setDashBoardModalState = useSetRecoilState(dashBoardModalState);

  const [list, setList] = useState(data?.data ?? []);

  const [, drop] = useDrop(() => ({ accept: typeof IndivNavContentInstance }));

  const [currentModalId, setCurrentModalId] = useState<number | null>(null);

  const findItem = useCallback((navUrl: string) => {
    const item = list.filter((i) => `${i.navUrl}` === navUrl)[0] as typeof IndivNavContentInstance;
    return {
      item,
      index: list.indexOf(item),
    };
  }, [list]);

  const moveItem = useCallback((navUrl: string, atIndex: number) => {
    const { item, index } = findItem(navUrl);

    setList(update(list, {
      $splice: [
        [index, 1],
        [atIndex, 0, item],
      ],
    }));
  }, [findItem, list, setList]);

  if (!data)
    return (
      <LoadingContainer>
        <LoadingLottie width={10} height={10} />
      </LoadingContainer>
    );

  return data.data.length === 0 ? (
    <EmptyLanding
      header={true}
      message1="네비게이션이 없어요."
      message2="새 네비게이션을 만들어보세요."
      buttonText="새 네비게이션 만들기"
      buttonClick={() => setDashBoardModalState('createNavigation')}
    />
  ) : (
    <DashBoardContentListContainer>
      <DashBoardContent id="컨텐츠바" content="이름" url="URL" />
      {list.map(({ id, name, navUrl, isPage }) => {
        return (
          <IndivNavDashboardContent
            key={id}
            currentModalId={currentModalId}
            setCurrentModalId={setCurrentModalId}
            id={id}
            content={name}
            url={navUrl}
            blogUrl={blogUrl as string}
            isPage={isPage}
            findItem={findItem}
            moveItem={moveItem}
          />
        );
      })}
    </DashBoardContentListContainer>
  );
};

export default NavContentList;
