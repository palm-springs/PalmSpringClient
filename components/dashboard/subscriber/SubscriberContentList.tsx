import React from 'react';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

const SubscriberContentList = () => {
  return (
    <DashBoardContentListContainer>
      <DashBoardContent id="컨텐츠바" email="이메일" createdAt="구독 시작일" newsLetter="발송된 뉴스레터 수" />
      <DashBoardContent
        id="sub_1"
        email="Tevin_Hahn99@gmail.com"
        createdAt="2023.07.06"
        newsLetter={20}
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        id="sub_2"
        email="Uriel0@hotmail.com"
        createdAt="2023.07.06"
        newsLetter={20}
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        id="sub_3"
        email="Tevin_Hahn99@gmail.com"
        createdAt="2023.07.06"
        newsLetter={20}
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        id="sub_4"
        email="Tevin_Hahn99@gmail.com"
        createdAt="2023.07.06"
        newsLetter={20}
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
    </DashBoardContentListContainer>
  );
};

export default SubscriberContentList;
