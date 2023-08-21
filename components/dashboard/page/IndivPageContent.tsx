import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { useDeletePage } from '@/hooks/dashboard';
import theme from '@/styles/theme';

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

  const notify = () =>
    toast.error('네비게이션 연결을 해제하고 다시 시도해주세요!', {
      id: 'has linked nav',
      style: {
        padding: '1.6rem 2rem',
        borderRadius: '3.2rem',
        background: theme.colors.background_red,
        color: '#fff',
        fontSize: '1.4rem',
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: '-0.028rem',
      },
    });

  return (
    <DashBoardContent
      key={id}
      id={id}
      content={title}
      draft={isDraft}
      createdAt={createdAt}
      onTitleClick={() => router.push(`/${blogUrl}/content/page/${pageUrl}/${id}`)}
      onMutateClick={() => {
        if (isDraft) {
          router.push(`/${blogUrl}/editor/page/${id}/draft`);
        } else {
          router.push(`/${blogUrl}/editor/page/${id}/edit`);
        }
      }}
      onDeleteClick={() => {
        if (isLinked) {
          alert('나중에 토스트 메세지로 네비게이션 연결을 해제하고 다시 시도해주세요! 를 보여주기');
          return;
        }
        mutate();
      }}
    />
  );
};

export default IndivPageContent;
