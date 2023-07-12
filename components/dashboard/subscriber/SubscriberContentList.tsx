import React from 'react';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

import SubscriberIndexBar from './SubscriberIndexBar';

const SubscriberContentList = () => {
  return (
    <DashBoardContentListContainer>
      <SubscriberIndexBar />
      <DashBoardContent
        email="Tevin_Hahn99@gmail.com"
        createdAt="2023.07.06"
        newsLetter={20}
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        email="Uriel0@hotmail.com"
        createdAt="2023.07.06"
        newsLetter={20}
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        email="Tevin_Hahn99@gmail.com"
        createdAt="2023.07.06"
        newsLetter={20}
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
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
