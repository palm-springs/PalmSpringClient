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

interface TempSavedListProps {
  id: number;
  title: string;
  teamMemberResponseDto: {
    id: number;
    name: string;
    job: string;
    createdAt: string;
  };
}
