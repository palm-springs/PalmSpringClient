'use client';

import React from 'react';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

const PageContentList = () => {
  return (
    <DashBoardContentListContainer>
      <DashBoardContent
        id="page_1"
        content="전 세계에서 폭발적으로 인기를 끈 가상 현실 게임,'넥서스' 출시!"
        draft={true}
        createdAt="2023.07.06"
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        id="page_2"
        content="로봇 의료진의 시대,인공지능 로봇 수술로 성공률 급증"
        draft={false}
        createdAt="2023.07.06"
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        id="page_3"
        content="심장 건강을 책임지는 스마트 워치,심박수 감시와 예방 기능 탑재"
        draft={true}
        createdAt="2023.07.06"
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        id="page_4"
        content="실감나는 가상현실 컨텐츠,엔터테인먼트 산업의 혁신 동력"
        draft={false}
        createdAt="2023.07.06"
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
    </DashBoardContentListContainer>
  );
};

export default PageContentList;
