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
      onDeleteClick={() => mutate()}
    />
  );
};

export default IndivPageContent;
