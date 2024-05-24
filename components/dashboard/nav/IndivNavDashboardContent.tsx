import { Dispatch, SetStateAction, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useRecoilState } from 'recoil';

import ModalPortal from '@/components/common/ModalPortal';
import { useDeleteNavigation } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashboardContentDeleteModal from '../components/DashboardContentDeleteModal';
import { dashBoardModalState } from '../state/modalState';

import { IndivNavContentInstance } from './NavContentList';
import UpdateNavigationModal from './UpdateNavigationModal';

interface IndivNavDashboardContentProps {
  currentModalId: number | null;
  setCurrentModalId: Dispatch<SetStateAction<number | null>>;
  id: number;
  content: string;
  url: string;
  blogUrl: string;
  isPage: boolean;
  moveItem: (id: string, to: number) => void;
  findItem: (id: string) => { index: number };
}

const IndivNavDashboardContent = (props: IndivNavDashboardContentProps) => {
  const { currentModalId, setCurrentModalId, id, content, url, blogUrl, isPage, moveItem, findItem } = props;

  const { mutate: deleteNav } = useDeleteNavigation(blogUrl, id);

  const [dashboardModalState, setDashboardModalState] = useRecoilState(dashBoardModalState);

  const [updateNavigationName, setUpdateNavigationName] = useState<string>(content);

  const [updateNavigationSelector, setUpdateNavigationSelector] = useState<string>(isPage ? content : '직접 입력');

  const [updateNavigationUrl, setUpdateNavigationUrl] = useState<string>(url);

  const originIndex = findItem(blogUrl).index;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeof IndivNavContentInstance,
    item: { blogUrl, originIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const { blogUrl: droppedUrl, originIndex } = item;
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveItem(droppedUrl, originIndex);
      }
    },
  }));

  const [, drop] = useDrop(() => ({
    accept: typeof IndivNavContentInstance,
    hover({ navUrl: draggedUrl }: typeof IndivNavContentInstance) {
      if (draggedUrl !== blogUrl) {
        const { index: overIndex } = findItem(blogUrl);
        moveItem(draggedUrl, overIndex);
      }
    },
  }), [findItem, moveItem]);

  const opacity = isDragging ? 0 : 1;

  return (
    <>
      <DashBoardContent
        key={id}
        id={String(id)}
        content={content}
        url={url}
        ref={(node) => drag(drop(node))}
        style={{ opacity }}
        onTitleClick={() => {
          if (isPage) {
            window.open(`https://${blogUrl}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}/content/page/${url}/${id}`);
            return;
          }
          if (typeof window !== 'undefined') {
            window.open(url);
          }
        }}
        onMutateClick={() => {
          setDashboardModalState('updateNavigation');
          setCurrentModalId(id);
          setUpdateNavigationName(content);
          setUpdateNavigationSelector(isPage ? content : '직접 입력');
          setUpdateNavigationUrl(url);
        }}
        onDeleteClick={() => {
          setDashboardModalState('deleteNav');
          setCurrentModalId(id);
        }}
      />
      {dashboardModalState === 'updateNavigation' && currentModalId === id && (
        <ModalPortal>
          <UpdateNavigationModal
            id={id}
            setModalState={setDashboardModalState}
            setUpdateNavigationName={setUpdateNavigationName}
            updateNavigationName={updateNavigationName}
            updateNavigationSelector={updateNavigationSelector}
            updateNavigationUrl={updateNavigationUrl}
            setUpdateNavigationUrl={setUpdateNavigationUrl}
            setUpdateNavigationSelector={setUpdateNavigationSelector}
            updateNavigationIsPage={updateNavigationSelector === '직접 입력' ? false : true}
          />
        </ModalPortal>
      )}
      {dashboardModalState === 'deleteNav' && currentModalId === id && (
        <DashboardContentDeleteModal
          title={content}
          text="네비게이션을 삭제하시겠어요?"
          subText="네비게이션을 삭제할 시, 복구할 수 없습니다."
          onDelete={() => {
            deleteNav();
            setDashboardModalState('');
            setCurrentModalId(null);
          }}
        />
      )}
    </>
  );
};

export default IndivNavDashboardContent;
