import React from 'react';

import UploadHeaderContainer from './ui/UploadHeaderContainer';
import UploadTabBar from './UploadTabBar';

const UploadHeader = () => {
  const writeNewPost = (e: any): void => {
    return;
  };

  return (
    <UploadHeaderContainer title="업로드된 글" buttonInnerText="새 글 작성하기" onButtonClick={writeNewPost}>
      <UploadTabBar />
    </UploadHeaderContainer>
  );
};

export default UploadHeader;
