type dashBoardPageType =
  | 'blogconfignav'
  | 'blogdirectnav'
  | 'category'
  | 'member'
  | 'nav'
  | 'page'
  | 'subscriber'
  | 'tempsaved'
  | 'upload';

type dashBoardTabType = 'all' | 'dev' | 'design' | 'plan' | 'culture';

interface NavListProps {
  id: string;
  name: string;
  navUrl: string;
  isPage: boolean;
}

interface PageListProps {
  id: string;
  title: string;
  createdAt: string;
  isDraft: boolean;
}

interface CategoryListProps {
  id: string;
  name: string;
  categoryUrl: string;
  description: string;
}
