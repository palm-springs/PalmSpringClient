import React from 'react';

import UploadContentContainer from './ui/UploadContentContainer';
import UploadContentListContainer from './ui/UploadContentListContainer';

const UploadContentList = () => {
  return (
    <UploadContentListContainer>
      <UploadContentContainer
        content="전 세계에서 폭발적으로 인기를 끈 가상 현실 게임,'넥서스' 출시!"
        tabType="문화"
        author="김서윤"
        position="TL"
        createdAt="2023년 7월 6일"
        onTitleClick={() => {
          console.log('김서윤');
        }}
        onMeatBallClick={() => {
          console.log('문화');
        }}
      />
      <UploadContentContainer
        content="로봇 의료진의 시대,인공지능 로봇 수술로 성공률 급증"
        tabType="개발"
        author="최수빈"
        position="Product Designer"
        createdAt="2023년 7월 6일"
        onTitleClick={() => {
          console.log('김서윤');
        }}
        onMeatBallClick={() => {
          console.log('문화');
        }}
      />
      <UploadContentContainer
        content="심장 건강을 책임지는 스마트 워치,심박수 감시와 예방 기능 탑재"
        tabType="문화"
        author="이서준"
        position="PO"
        createdAt="2023년 7월 6일"
        onTitleClick={() => {
          console.log('김서윤');
        }}
        onMeatBallClick={() => {
          console.log('문화');
        }}
      />
      <UploadContentContainer
        content="전 세계에서 폭발적으로 인기를 끈 가상 현실 게임,'넥서스' 출시!"
        tabType="문화"
        author="김서윤"
        position="TL"
        createdAt="2023년 7월 6일"
        onTitleClick={() => {
          console.log('김서윤');
        }}
        onMeatBallClick={() => {
          console.log('문화');
        }}
      />
    </UploadContentListContainer>
  );
};

export default UploadContentList;
