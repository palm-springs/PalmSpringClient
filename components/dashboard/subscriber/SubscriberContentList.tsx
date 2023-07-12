import React from 'react';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

import SubscriberIndexBar from './SubscriberIndexBar';

const SubscriberContentList = () => {
  return (
    <DashBoardContentListContainer>
      <SubscriberIndexBar />
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
