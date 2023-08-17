import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { useDeletePage } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';

interface IndivPageContentProps {
  blogUrl: string;
  id: string;
  title: string;
  isDraft: boolean;
  isLinked: boolean;
  createdAt: string;
  pageUrl: string;
}

const IndivPageContent = (props: IndivPageContentProps) => {
  const { blogUrl, id, title, isDraft, isLinked, createdAt, pageUrl } = props;

  const router = useRouter();

  const { mutate } = useDeletePage(blogUrl, Number(id));

  return (
    <DashBoardContent
      key={id}
      id={id}
      content={title}
      draft={isDraft}
      createdAt={createdAt}
      onTitleClick={() => router.push(`/${blogUrl}/content/article/${pageUrl}/${id}`)}
      onMutateClick={() => router.push(`/${blogUrl}/editor/page/edit/${id}`)}
      onDeleteClick={() => {
        if (isLinked) {
          toast('해당 페이지는 연결된 네비게이션이 존재합니다. 네비게이션 연결을 해제하고 다시 시도해주세요!');
          return;
        }
        mutate();
      }}
    />
  );
};

export default IndivPageContent;
