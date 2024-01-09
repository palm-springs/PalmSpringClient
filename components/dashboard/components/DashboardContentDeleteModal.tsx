import { useSetRecoilState } from 'recoil';

import ModalPortal from '@/components/common/ModalPortal';
import DashboardDeleteModal from '@/components/common/ui/DashboardDeleteModal';

import { dashBoardModalState } from '../state/modalState';

interface DashboardContentDeleteModalProps {
  text: string;
  subText: string;
  onDelete: () => void;
}

const DashboardContentDeleteModal = (props: DashboardContentDeleteModalProps) => {
  const { text, subText, onDelete } = props;

  const setDashboardModalState = useSetRecoilState(dashBoardModalState);

  return (
    <ModalPortal>
      <DashboardDeleteModal
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
