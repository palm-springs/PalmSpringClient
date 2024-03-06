// 관련 현재 로직 : 최초 임시저장 후에는 response를 통해 받은 articleId or pageId를 통해 다른 api를 통해 임시저장하는중
// problem) 새로고침 후에는 "최초 임시저장"을 했다는 정보가 증발되어 발생하는 버그 발견
// solution) sessionStorage로 해당 값을 관리하고자 key값 constant로 관리.
export const IS_FIRST_DRAFT_CLICK = 'isFirstDraftClick';
export const ARTICLE_DATA_ID = 'articleId';
export const PAGE_DATA_ID = 'pageId';
