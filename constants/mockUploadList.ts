import { dashBoardTabType } from '@/types/dashboard';

interface mockUploadContentBluePrint {
  id: string;
  content: string;
  tabType: dashBoardTabType;
  author: string;
  position: string;
  createdAt: string;
  onTitleClick: () => void;
}

const mockUploadContentList: mockUploadContentBluePrint[] = [
  {
    id: 'content_1',
    content: "전 세계에서 폭발적으로 인기를 끈 가상 현실 게임,'넥서스' 출시!",
    tabType: 'culture',
    author: '김서윤',
    position: 'TL',
    createdAt: '2023.07.06',
    onTitleClick: () => {
      console.log('김서윤');
    },
  },
  {
    id: 'content_2',
    content: '로봇 의료진의 시대,인공지능 로봇 수술로 성공률 급증',
    tabType: 'dev',
    author: '최수빈',
    position: '권윤',
    createdAt: '2023.07.06',
    onTitleClick: () => {
      console.log('김서윤');
    },
  },
  {
    id: 'content_3',
    content: "전 세계에서 폭발적으로 인기를 끈 가상 현실 게임,'넥서스' 출시!",
    tabType: 'culture',
    author: '김서윤',
    position: 'TL',
    createdAt: '2023.07.06',
    onTitleClick: () => {
      console.log('김서윤');
    },
  },
  {
    id: 'content_4',
    content: '심장 건강을 책임지는 스마트 워치,심박수 감시와 예방 기능 탑재',
    tabType: 'culture',
    author: '이서준',
    position: 'PO',
    createdAt: '2023.07.06',
    onTitleClick: () => {
      console.log('김서윤');
    },
  },
  {
    id: 'content_5',
    content: "전 세계에서 폭발적으로 인기를 끈 가상 현실 게임,'넥서스' 출시!",
    tabType: 'culture',
    author: '김서윤',
    position: 'TL',
    createdAt: '2023.07.06',
    onTitleClick: () => {
      console.log('김서윤');
    },
  },
  {
    id: 'content_6',
    content: '실감나는 가상현실 컨텐츠,엔터테인먼트 산업의 혁신 동력',
    tabType: 'plan',
    author: '이수아',
    position: 'CEO',
    createdAt: '2023.07.06',
    onTitleClick: () => {
      console.log('김서윤');
    },
  },
  {
    id: 'content_7',
    content: "전 세계에서 폭발적으로 인기를 끈 가상 현실 게임,'넥서스' 출시!",
    tabType: 'culture',
    author: '김서윤',
    position: 'TL',
    createdAt: '2023.07.06',
    onTitleClick: () => {
      console.log('김서윤');
    },
  },
];

export default mockUploadContentList;