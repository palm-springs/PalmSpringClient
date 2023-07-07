import React, { useState } from 'react';

import UploadContentContainer from './ui/UploadContentContainer';

export interface UploadContentProps {
  content: string;
  tabType?: string;
  author: string;
  position: string; // 아마 팀별 직무가 팀마다 다를 수 있으므로 나중에 서버에서 타입을 받아올 수 있다면 그거로 지정해줍시다.
  createdAt: string;
  onTitleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const UploadContent = (props: UploadContentProps) => {
  const { content, tabType, author, position, createdAt, onTitleClick } = props;

  const [isPopOverMenuOpen, setIsPopOverMenuOpen] = useState<boolean>(false);

  return (
    <UploadContentContainer
      content={content}
      tabType={tabType}
      author={author}
      position={position}
      createdAt={createdAt}
      onTitleClick={onTitleClick}
      onMeatBallClick={setIsPopOverMenuOpen}
      isPopOverMenuOpen={isPopOverMenuOpen}
    />
  );
};

export default UploadContent;
