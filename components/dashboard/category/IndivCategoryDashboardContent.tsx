import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useRecoilState } from 'recoil';

import ModalPortal from '@/components/common/ModalPortal';
import { useDeleteCategory } from '@/hooks/dashboard';
import { createToast } from '@/utils/lib/toast';

import DashBoardContent from '../components/DashBoardContent';
import DashboardContentDeleteModal from '../components/DashboardContentDeleteModal';
import { dashBoardModalState } from '../state/modalState';

import UpdateCategoryModal from './UpdateCategoryModal';

interface IndivCategoryDashboardContentProps {
  currentModalId: number | null;
  setCurrentModalId: Dispatch<SetStateAction<number | null>>;
  id: number;
  content: string;
  blogUrl: string;
  categoryUrl: string;
  description: string;
}

const IndivCategoryDashboardContent = (props: IndivCategoryDashboardContentProps) => {
  const { currentModalId, setCurrentModalId, id, content, description, blogUrl, categoryUrl } = props;

  const [modalState, setModalState] = useRecoilState(dashBoardModalState);

  const [updateCategoryName, setUpdateCategoryName] = useState<string>(content);

  const [updateCategoryDescription, setUpdateCategoryDescription] = useState<string>(description);

  const remainContentErrorNotify = createToast({
    type: 'ERROR',
    message: '카테고리에 글이 남아있습니다',
    id: '406 error occured',
  });

  const { mutate: deleteCategory, data } = useDeleteCategory(blogUrl, id);

  useEffect(() => {
    if (data && data.code === 406) {
      remainContentErrorNotify();
    }
  }, [data]);

  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerClassName=""
        containerStyle={{
          bottom: 50,
        }}
      />
      <DashBoardContent
        key={id}
        id={String(id)}
        content={content}
        url={categoryUrl}
        description={description}
        onTitleClick={() => {
          window.open(`https://${blogUrl}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}/${blogUrl}/${categoryUrl}`);
        }}
        onMutateClick={() => {
          setModalState('updateCategory');
          setCurrentModalId(id);
          setUpdateCategoryName(content);
          setUpdateCategoryDescription(description);
        }}
        onDeleteClick={() => {
          setModalState('deleteCategory');
          setCurrentModalId(id);
        }}
      />
      {modalState === 'updateCategory' && currentModalId === id && (
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
      {modalState === 'deleteCategory' && currentModalId === id && (
        <DashboardContentDeleteModal
          text="카테고리를 삭제하시겠어요?"
          subText="카테고리를 삭제할 시, 복구할 수 없습니다."
          onDelete={() => {
            deleteCategory();
            setModalState('');
            setCurrentModalId(null);
          }}
        />
      )}
    </>
  );
};

export default IndivCategoryDashboardContent;
