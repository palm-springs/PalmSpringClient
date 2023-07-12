import React from 'react';

import Email from '../components/ui/Email';
import IndexBarContainer from '../components/ui/IndexBarContainer';
import NewsLetter from '../components/ui/NewsLetter';
import Url from '../components/ui/Url';

const SubscriberIndexBar = () => {
  return (
    <IndexBarContainer>
      <Email email="이메일" />
      <Url url="구독 시작일" />
      <NewsLetter newsLetter="발송된 뉴스레터 수" />
    </IndexBarContainer>
  );
};

export default SubscriberIndexBar;
