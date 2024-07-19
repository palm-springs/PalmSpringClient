import { getChangedImgSrc } from '../getChangedImgSrc';

// 이미지 CDN 주소로 바꿔 끼우기 함수
const changeImgSrc = async (team: string) => {
  const imgList = document.querySelectorAll(
    'img:not([src^="https://cdn.palms.blog/"]):not([class="ProseMirror-separator"])',
  );

  const promises = Array.from(imgList).map(async (img) => {
    const imgUrl = await getChangedImgSrc(img, String(team));
    return imgUrl;
  });

  const results = await Promise.allSettled(promises);
  const tempImgArray = results
    .filter((result) => result.status === 'fulfilled')
    .map((result) => (result as PromiseFulfilledResult<string>).value);

  return tempImgArray;
};

export const getEditorContent = async (team: string) => {
  const newImgArr = await changeImgSrc(team);
  const content = document.querySelector('[contenteditable="true"]')?.innerHTML;

  return { content: content || '내용을 입력해주세요', newImgArr: newImgArr || [] };
};
