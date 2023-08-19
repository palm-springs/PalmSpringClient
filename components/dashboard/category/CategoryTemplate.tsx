'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';

import ModalPortal from '@/components/common/ModalPortal';
import DashboardCreateModal from '@/components/common/ui/DashboardCreateModal';
import { usePostCategory } from '@/hooks/dashboard';

import DashBoardTemplateContainer from '../components/ui/DashBoardTemplateContainer';
import Line from '../components/ui/Line';
import ModalPortalContainer from '../components/ui/ModalPortalContainer';
import ModalTextAreaContainer from '../components/ui/ModalTextAreaContainer';
import { dashBoardModalState } from '../state/modalState';

import CategoryContentList from './CategoryContentList';

const CategoryTemplate = () => {
  const { team: blogUrl } = useParams();

  const [modalState, setModalState] = useRecoilState(dashBoardModalState);

  const [newCategoryName, setNewCategoryName] = useState<string>('');

  const [newCategoryDescription, setNewCategoryDescription] = useState<string>('');

  const { mutate } = usePostCategory(blogUrl, newCategoryName, newCategoryDescription);

  return (
    <>
      <DashBoardTemplateContainer>
        <Line />
        <CategoryContentList />
      </DashBoardTemplateContainer>
      {modalState === 'createCategory' && (
        <ModalPortal>
          <DashboardCreateModal
            mainText="새 카테고리 만들기"
            buttonText="저장하기"
            buttonHandler={() => {
              mutate();
              setModalState('');
            }}
            onModalCloseBtnClick={() => setModalState('')}
            disabled={newCategoryName === '' && newCategoryDescription === ''}>
            <ModalPortalContainer
              title="카테고리 이름"
              placeholder="카테고리 이름을 입력해주세요."
              state={newCategoryName}
              setState={setNewCategoryName}
            />
            <ModalTextAreaContainer
              title="한 줄 소개"
              placeholder="한 줄 소개를 입력하세요"
              state={newCategoryDescription}
              setState={setNewCategoryDescription}
            />
          </DashboardCreateModal>
        </ModalPortal>
      )}
    </>
  );
};

export default CategoryTemplate;
