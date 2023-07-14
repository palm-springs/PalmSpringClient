'use client';

import React, { useEffect, useMemo, useState } from 'react';

import ModalPortal from '@/components/common/ModalPotal';
import DashboardCreateModal from '@/components/common/ui/DashboardCreateModal';
import { TextInput } from '@/components/create-blog/info/ui/CreateBasicInfoLanding';
import TextInputForm from '@/components/create-blog/info/ui/TextInputForm';
import { useGetArticleList } from '@/hooks/article';
import { useGetCategoryList } from '@/hooks/dashboard';
import { getLiteralCategoryList } from '@/utils/getLiteralCategoryList';

import DashBoardTemplateContainer from '../components/ui/DashBoardTemplateContainer';
import Line from '../components/ui/Line';

import ModalInputText from './components/ui/ModalInputText';
import UploadContentList from './components/UploadContentList';
import UploadTabBar from './components/UploadTabBar';

const UploadTemplate = () => {
  const blogUrl = 'Palms';

  const [category, setCategory] = useState<string>('전체');

  const categoryData = useGetCategoryList(blogUrl);

  const articleData = useGetArticleList(blogUrl, category === '전체' ? '' : category);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  useEffect(() => {
    console.log(category, categoryData);
  }, [articleData]);

  if (!categoryData) return <div>로더</div>;

  const filteredCategory = getLiteralCategoryList(categoryData);

  return (
    <>
      <DashBoardTemplateContainer>
        <UploadTabBar
          setCategory={setCategory}
          currentCategory={[...filteredCategory]}
          categoryListData={categoryData.data}
        />
        <Line />
        <UploadContentList category={filteredCategory} articleData={articleData} />
      </DashBoardTemplateContainer>
      {/* <ModalPortal>
        <DashboardCreateModal mainText="새 카테고리 만들기" buttonText="저장하기">
          <ModalInputText text="카테고리 이름" />
          <TextInputForm type="이름">
            <TextInput placeholder="이름을 입력해주세요" />
          </TextInputForm>
        </DashboardCreateModal>
      </ModalPortal> */}
      {/* {isModalOpen && (

      )} */}
    </>
  );
};

export default UploadTemplate;
