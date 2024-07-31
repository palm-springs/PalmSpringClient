'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { getCategoryDuplication } from '@/api/dashboard';
import ModalPortal from '@/components/common/ModalPortal';
import DashboardCreateModal from '@/components/common/ui/DashboardCreateModal';
import { usePostCategory } from '@/hooks/dashboard';
import { NotifyDuplicatedCategory } from '@/utils/dashboard';

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

  const { mutate } = usePostCategory(
    String(blogUrl),
    newCategoryName,
    newCategoryDescription,
    setNewCategoryName,
    setNewCategoryDescription,
  );

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
            buttonHandler={async () => {
              const { data: isDuplicated } = await getCategoryDuplication(blogUrl as string, newCategoryName);
              if (isDuplicated) {
                NotifyDuplicatedCategory();
              } else {
                mutate();
                setModalState('');
              }
            }}
            onModalCloseBtnClick={() => {
              setModalState('');
              setNewCategoryName('');
              setNewCategoryDescription('');
            }}
            disabled={newCategoryName === '' || newCategoryDescription === ''}>
            <ModalPortalContainer
              title="카테고리 이름"
              placeholder="카테고리 이름을 입력해주세요."
              state={newCategoryName}
              setState={setNewCategoryName}
            />
            <ModalTextAreaContainer
              title="설명"
              placeholder="카테고리 설명을 입력하세요"
              state={newCategoryDescription}
              setState={setNewCategoryDescription}
            />
            <DetailText>대시보드에서만 볼 수 있는 카테고리 설명입니다. (블로그에서는 보이지 않아요.)</DetailText>
          </DashboardCreateModal>
        </ModalPortal>
      )}
    </>
  );
};

export default CategoryTemplate;

const DetailText = styled.p`
  margin-top: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body3_Regular};
`;
