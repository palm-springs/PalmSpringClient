type mapPageType2HeaderInfoBluePrint = {
  [pageType in dashBoardPageType]: {
    title: string;
    buttonInnerText?: string;
    onButtonClickActionName?: modalStateProps;
  };
};

const mapPageType2HeaderInfo: mapPageType2HeaderInfoBluePrint = {
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
};

export default mapPageType2HeaderInfo;
