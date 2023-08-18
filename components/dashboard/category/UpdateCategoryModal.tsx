import { Dispatch, SetStateAction } from 'react';
import { useParams } from 'next/navigation';
import { SetterOrUpdater } from 'recoil';

import DashboardCreateModal from '@/components/common/ui/DashboardCreateModal';
import { useUpdateCategory } from '@/hooks/dashboard';

import ModalPortalContainer from '../components/ui/ModalPortalContainer';
import ModalTextAreaContainer from '../components/ui/ModalTextAreaContainer';

interface UpdateCategoryModalProps {
  setModalState: SetterOrUpdater<modalStateProps>;
  id: number;
  updateCategoryName: string;
  setUpdateCategoryName: Dispatch<SetStateAction<string>>;
  updateCategoryDescription: string;
  setUpdateCategoryDescription: Dispatch<SetStateAction<string>>;
}

const UpdateCategoryModal = (props: UpdateCategoryModalProps) => {
  const { team: blogUrl } = useParams();
  const {
    setModalState,
    id,
    updateCategoryName,
    setUpdateCategoryName,
    updateCategoryDescription,
    setUpdateCategoryDescription,
  } = props;

  const { mutate } = useUpdateCategory(blogUrl, id, updateCategoryName, updateCategoryDescription);

  return (
    <DashboardCreateModal
      mainText="카테고리 수정하기"
      buttonText="저장하기"
      buttonHandler={() => {
        mutate();
        setModalState('');
        setUpdateCategoryName('');
        setUpdateCategoryDescription('');
      }}
      onModalCloseBtnClick={() => {
        setModalState('');
        setUpdateCategoryName('');
        setUpdateCategoryDescription('');
      }}
      disabled={updateCategoryName === '' || updateCategoryDescription === ''}>
      <ModalPortalContainer
        title="카테고리 이름"
        placeholder="카테고리 이름을 입력해주세요."
        state={updateCategoryName}
        setState={setUpdateCategoryName}
      />
      <ModalTextAreaContainer
        title="한 줄 소개"
        placeholder="한 줄 소개를 입력하세요"
        state={updateCategoryDescription}
        setState={setUpdateCategoryDescription}
      />
    </DashboardCreateModal>
  );
};

export default UpdateCategoryModal;
