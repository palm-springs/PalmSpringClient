export type dashBoardPageType =
  | 'blogconfignav'
  | 'blogdirectnav'
  | 'category'
  | 'member'
  | 'nav'
  | 'page'
  | 'subscriber'
  | 'tempsaved'
  | 'upload'
  | 'basicuserinfo';

export interface NavListProps {
  id: number;
  name: string;
  navUrl: string;
  isPage: boolean;
}

export interface PageListProps {
  id: string;
  title: string;
  createdAt: string;
  pageUrl: string;
  isDraft: boolean;
  isLinked: boolean;
}

export interface CategoryListProps {
  id: string;
  name: string;
  categoryUrl: string;
  description: string;
}

export interface TempSavedListProps {
  id: number;
  title: string;
  teamMemberResponseDto: {
    id: number;
    name: string;
    job: string;
    createdAt: string;
  };
}
