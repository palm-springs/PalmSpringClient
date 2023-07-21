import { ArticleData } from '@/types/article';

export const ARTICLE_LIST: ArticleData[] = [
  {
    id: 1,
    thumbnail: 'https://unsplash.com/s/photos/image',
    title:
      '리액트 API와 코드 재사용의 진화에 대한 글의 제목이 길다면 어떨까아아아아ㅏㅇ아아ㅏ앙아아아ㅏㅇ아아아아아ㅏ아아아',
    description: '리액트 API와 코드 재사용의 진화에 관한 글입니다.',
    memberName: '장묭지',
    job: '웹 프론트엔드 개발자',
    createdAt: '2023.06.25',
    articleCategory: {
      categoryId: 1,
      categoryName: '개발',
    },
  },
  {
    id: 2,
    title: '인간의 생명 연장 가능성,유전자 편집 기술로 한 발 더 나아가다',
    description: '리액트 API와 코드 재사용의 진화에 관한 글입니다.',
    memberName: '오형근',
    job: '웹 프론트엔드 개발자',
    createdAt: '2023.06.28',
    articleCategory: {
      categoryId: 1,
      categoryName: '디자인',
    },
  },
  {
    id: 3,
    title: '바이오 연구의 첨단,인공 유전자로 인간 피부 재생 가능성',
    description: '리액트 API와 코드 재사용의 진화에 관한 글입니다.',
    memberName: '김서현',
    job: '웹 프론트엔드 개발자',
    createdAt: '2023.06.27',
    articleCategory: {
      categoryId: 1,
      categoryName: '팀문화',
    },
  },
  {
    id: 4,
    title: '무인 택배 드론 서비스,시험 운영 중으로 곧 상용화 예정',
    description: '이렇게 글 설명이 보입니다.',
    memberName: '이시연 · 웹 프론트엔드 개발자',
    job: '웹 프론트엔드 개발자',
    createdAt: '2023.07.25',
    articleCategory: {
      categoryId: 1,
      categoryName: '팀문화',
    },
  },
];
