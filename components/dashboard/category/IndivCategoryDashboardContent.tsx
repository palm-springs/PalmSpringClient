import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useRecoilState } from 'recoil';

import ModalPortal from '@/components/common/ModalPortal';
import { DOMAIN_NAME } from '@/constants/palmspringInfo';
import { useDeleteCategory } from '@/hooks/dashboard';

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

  const notify = () =>
    toast.error('카테고리에 글이 남아있습니다!', {
      id: '406 error occured',
      style: {
        padding: '1.6rem 2rem',
        borderRadius: '3.2rem',
        background: '#343A40',
        color: '#fff',
        fontSize: '1.4rem',
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: '-0.028rem',
      },
    });

  const { mutate: deleteCategory, data } = useDeleteCategory(blogUrl, id);

  useEffect(() => {
    if (data && data.code === 406) {
      notify();
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
          window.location.href = `https://${blogUrl}.${DOMAIN_NAME}/${blogUrl}/home/${categoryUrl}`;
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
