import { useSetRecoilState } from 'recoil';

import ModalPortal from '@/components/common/ModalPortal';
import DashboardDeleteModal from '@/components/common/ui/DashboardDeleteModal';

import { dashBoardModalState } from '../state/modalState';

interface DashboardContentDeleteModalProps {
  title: string;
  text: string;
  subText: string;
  onDelete: () => void;
}

const DashboardContentDeleteModal = (props: DashboardContentDeleteModalProps) => {
  const { title, text, subText, onDelete } = props;

  const setDashboardModalState = useSetRecoilState(dashBoardModalState);

  return (
    <ModalPortal>
      <DashboardDeleteModal
        title={title}
        text={text}
        subText={subText}
        leftButtonText="유지하기"
        rightButtonText="삭제하기"
        leftHandler={() => setDashboardModalState('')}
        rightHandler={onDelete}
      />
    </ModalPortal>
  );
};

export default DashboardContentDeleteModal;
