'use client';

import React from 'react';

import DashBoardContent from '../../components/DashBoardContent';
import DashBoardContentListContainer from '../../components/ui/DashBoardContentListContainer';

const UploadContentList = () => {
  return (
    <DashBoardContentListContainer>
      <DashBoardContent
        id="upload_1"
        content="전 세계에서 폭발적으로 인기를 끈 가상 현실 게임,'넥서스' 출시!"
        tabType="문화"
        author="김서윤"
        position="TL"
        createdAt="2023.07.06"
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        id="upload_2"
        content="로봇 의료진의 시대,인공지능 로봇 수술로 성공률 급증"
        tabType="개발"
        author="최수빈"
        position="Product Designer"
        createdAt="2023.07.06"
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        id="upload_3"
        content="심장 건강을 책임지는 스마트 워치,심박수 감시와 예방 기능 탑재"
        tabType="문화"
        author="이서준"
        position="PO"
        createdAt="2023.07.06"
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        id="upload_4"
        content="전 세계에서 폭발적으로 인기를 끈 가상 현실 게임,'넥서스' 출시!"
        tabType="문화"
        author="김서윤"
        position="TL"
        createdAt="2023.07.06"
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
    </DashBoardContentListContainer>
  );
};

export default UploadContentList;
