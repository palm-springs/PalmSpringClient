import { useState } from 'react';
import { useRecoilState } from 'recoil';

import ModalPortal from '@/components/common/ModalPortal';
import { useDeleteCategory } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import { dashBoardModalState } from '../state/modalState';

import UpdateCategoryModal from './UpdateCategoryModal';

interface IndivCategoryDashboardContentProps {
  id: number;
  content: string;
  blogUrl: string;
  categoryUrl: string;
  description: string;
}

const IndivCategoryDashboardContent = (props: IndivCategoryDashboardContentProps) => {
  const { id, content, description, blogUrl, categoryUrl } = props;

  const [modalState, setModalState] = useRecoilState(dashBoardModalState);

  const [updateCategoryName, setUpdateCategoryName] = useState<string>(content);

  const [updateCategoryDescription, setUpdateCategoryDescription] = useState<string>(description);

  const { mutate: deleteCategory } = useDeleteCategory(blogUrl, id);

  return (
    <>
      <DashBoardContent
        key={id}
        id={String(id)}
        content={content}
        url={blogUrl}
        onTitleClick={() => {
          window.location.href = `https://${blogUrl}.palms.blog/${blogUrl}/home/${categoryUrl}`;
        }}
        onMutateClick={() => {
          setModalState('updateCategory');
        }}
        onDeleteClick={() => {
          deleteCategory();
        }}
      />
      {modalState === 'updateCategory' && (
        <ModalPortal>
          <UpdateCategoryModal
            id={id}
            setModalState={setModalState}
            updateCategoryName={updateCategoryName}
            setUpdateCategoryName={setUpdateCategoryName}
            updateCategoryDescription={updateCategoryDescription}
            setUpdateCategoryDescription={setUpdateCategoryDescription}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default IndivCategoryDashboardContent;
