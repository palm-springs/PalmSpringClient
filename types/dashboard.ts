export type dashBoardPageType =
  | 'blogconfignav'
  | 'blogdirectnav'
  | 'category'
  | 'member'
  | 'nav'
  | 'page'
  | 'subscriber'
  | 'statistics'
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

export interface BlogSummaryProps {
  day: {
    views: number;
    rate: number;
    isIncrease: boolean;
  };
  month: {
    views: number;
    rate: number;
    isIncrease: boolean;
  };
  total: {
    views: number;
  };
}

export interface BlogPeriodProps {
  data: {
    type: string;
    rowCount: number;
    rows: [
      {
        date: string;
        views: number;
        rate: number;
        isIncrease: boolean;
      },
    ];
  };
}
