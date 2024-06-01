import { getContentCtrlVImage } from '../getImageMultipartData';

// 이미지 CDN 주소로 바꿔 끼우기 함수
const changeImgSrc = async (team: string) => {
  const imgList = document.querySelectorAll('img:not([src^="https://cdn.palms.blog/"]):not([class])');
  const tempImgArray: string[] = [];

  for (const img of imgList) {
    const imgSrc = img?.getAttribute('src');
    if (!imgSrc) return;

    const blob = await fetch(imgSrc).then((res) => res.blob());
    const file = new File([blob], 'image.png', { type: 'image/png' });
    const imgUrl = await getContentCtrlVImage(file, String(team));
    tempImgArray.push(imgUrl);
    img?.setAttribute('src', imgUrl);
  }

  return tempImgArray;
};

export const getEditorContent = async (team: string) => {
  const newImgArr = await changeImgSrc(team);
  const content = document.querySelector('[contenteditable="true"]')?.innerHTML;

  return { content: content || '내용을 입력해주세요', newImgArr: newImgArr || [] };
};
