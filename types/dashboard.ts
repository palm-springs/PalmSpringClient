export type dashBoardPageType =
  | 'blogconfignav'
  | 'blogdirectnav'
  | 'category'
  | 'member'
  | 'nav'
  | 'page'
  | 'subscriber'
  | 'tempsaved'
  | 'upload';

export interface NavListProps {
  id: string;
  name: string;
  navUrl: string;
  isPage: boolean;
}

export interface PageListProps {
  id: string;
  title: string;
  createdAt: string;
  isDraft: boolean;
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