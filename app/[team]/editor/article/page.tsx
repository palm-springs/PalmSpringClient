import React from 'react';

import DashboardDeleteModal from '@/components/common/UI/DashboardDeleteModal';
import ArticleTitle from '@/components/editor/article/UI/ArticleTitle';
import SaveArticleButton from '@/components/editor/article/UI/SaveArticleButton';
import ToolBox from '@/components/editor/article/UI/ToolBox';
import TextEditor from '@/components/editor/TextEditor';

const CreateArticlePage = () => {
  return (
    <>
      <DashboardDeleteModal
        text={'저장하지않고 나가시겠어요?'}
        subText={'저장하지 않고 나가실 경우,'}
        lineBreaking={'지금까지 작성한 내용이 사라집니다.'}
        leftButtonText={'돌아가기'}
        rightButtonText={'나가기'}
      />
      <ArticleTitle />
      <ToolBox />
      <TextEditor />
      <SaveArticleButton />
    </>
  );
};

export default CreateArticlePage;
