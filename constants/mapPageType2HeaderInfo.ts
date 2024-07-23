import { dashBoardPageType } from '@/types/dashboard';

type mapPageType2HeaderInfoBluePrint = {
  [pageType in dashBoardPageType]: {
    title: string;
    explanation?: string;
    buttonInnerText?: string;
    onButtonClickActionName?: modalStateProps;
  };
};

const mapPageType2HeaderInfo: mapPageType2HeaderInfoBluePrint = {
  statistics: {
    title: '통계',
  },
  upload: {
    title: '업로드된 글',
    buttonInnerText: '새 글 작성하기',
    onButtonClickActionName: 'createArticle', // 나중에 api 나오면 수정하기
  },
  tempsaved: {
    title: '임시저장된 글',
    buttonInnerText: '새 글 작성하기',
    onButtonClickActionName: 'createArticle', // 나중에 api 나오면 수정하기
  },
  page: {
    title: '페이지',
    explanation:
      '아티클과 달리 작성일/작성자가 노출되지 않는 콘텐츠입니다. 회사 및 블로그 소개글 등의 용도로 활용할 수 있습니다.',
    buttonInnerText: '새 페이지 만들기',
    onButtonClickActionName: 'createPage', // 나중에 api 나오면 수정하기
  },
  category: {
    title: '카테고리',
    buttonInnerText: '새 카테고리 만들기',
    onButtonClickActionName: 'createCategory', // 나중에 api 나오면 수정하기
  },
  nav: {
    title: '네비게이션',
    explanation:
      '블로그 헤더에서 특정 페이지로의 이동을 위한 링크의 기능을 합니다. 페이지 또는 외부 웹사이트를 연결할 수 있습니다.',
    buttonInnerText: '새 네비게이션 만들기',
    onButtonClickActionName: 'createNavigation', // 나중에 api 나오면 수정하기
  },
  member: {
    title: '팀원',
    buttonInnerText: '새 팀원 추가하기',
    onButtonClickActionName: 'createMember', // 나중에 api 나오면 수정하기
  },
  subscriber: {
    title: '구독자',
    buttonInnerText: '새 구독자 추가하기',
    onButtonClickActionName: 'createSubscriber', // 나중에 api 나오면 수정하기
  },
  blogconfignav: {
    title: '블로그 설정',
  },
  blogdirectnav: {
    title: '블로그 바로 가기',
  },
  basicuserinfo: {
    title: '유저 기본 정보',
  },
};

export default mapPageType2HeaderInfo;
