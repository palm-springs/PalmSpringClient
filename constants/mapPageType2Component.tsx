import {
  ArrowRightContained02Icon,
  ChartLogoIcon,
  File02Icon,
  File04Icon,
  Grid01Icon,
  Menu01Icon,
  SettingIcon,
  TempsavedIcon,
  UserProfile03Icon,
  UserProfileCheckIcon,
} from '@/public/icons';
import { dashBoardPageType } from '@/types/dashboard';

type mapPageType2ComponentBluePrint = {
  [pageType in dashBoardPageType]: {
    path: pageType;
    innerText: string;
    icon: React.JSX.Element;
  };
};

const mapPageType2Component: mapPageType2ComponentBluePrint = {
  statistics: {
    path: 'statistics',
    innerText: '통계',
    icon: <ChartLogoIcon />,
  },
  upload: {
    path: 'upload',
    innerText: '업로드된 글',
    icon: <File02Icon />,
  },
  blogconfignav: {
    path: 'blogconfignav',
    innerText: '블로그 설정',
    icon: <SettingIcon />,
  },
  blogdirectnav: {
    path: 'blogdirectnav',
    innerText: '블로그 바로 가기',
    icon: <ArrowRightContained02Icon />,
  },
  category: {
    path: 'category',
    innerText: '카테고리',
    icon: <Grid01Icon />,
  },
  member: {
    path: 'member',
    innerText: '팀원',
    icon: <UserProfile03Icon />,
  },
  nav: {
    path: 'nav',
    innerText: '네비게이션',
    icon: <Menu01Icon />,
  },
  page: {
    path: 'page',
    innerText: '페이지',
    icon: <File04Icon />,
  },
  subscriber: {
    path: 'subscriber',
    innerText: '구독자',
    icon: <UserProfileCheckIcon />,
  },
  tempsaved: {
    path: 'tempsaved',
    innerText: '임시저장한 글',
    icon: <TempsavedIcon />,
  },
  basicuserinfo: {
    path: 'basicuserinfo',
    innerText: '유저 기본 정보',
    icon: <UserProfile03Icon />,
  },
};

export default mapPageType2Component;
