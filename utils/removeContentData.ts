import { ARTICLE_DATA_ID, IS_FIRST_DRAFT_CLICK, PAGE_DATA_ID } from '@/constants/editor';

// 세션스토리지로부터 컨텐트 데이터를 remove - articleDataId, pageDataId, isFirstClick
export const removeDraftContentData = () => {
  // sessionStorage
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

  sessionStorage?.removeItem(IS_FIRST_DRAFT_CLICK);
  sessionStorage?.removeItem(ARTICLE_DATA_ID);
  sessionStorage?.removeItem(PAGE_DATA_ID);
};
