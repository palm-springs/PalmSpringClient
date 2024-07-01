import { postExternalImage } from '@/api/postImage';

import { getContentCtrlVImage } from '../getImageMultipartData';

// 이미지 CDN 주소로 바꿔 끼우기 함수
const changeImgSrc = async (team: string) => {
  const imgList = document.querySelectorAll(
    'img:not([src^="https://cdn.palms.blog/"]):not([class="ProseMirror-separator"]):not([class="inaccessible"])',
  );

  const promises = Array.from(imgList).map(async (img) => {
    // src뽑아내기
    let imgSrc = img.getAttribute('src');
    if (!imgSrc) return;

    // 외부 링크인 경우 base64로 받아내기
    if (!imgSrc.startsWith('data:')) {
      const data = await postExternalImage(imgSrc);
      // 접근 권한이 없는 경우
      if (!data) {
        img?.classList.add('inaccessible');
        return;
      }
      imgSrc = `data:image/png;base64,${data}`;
    }

    // base64 -> File -> CDN 주소 받아오기
    const blob = await fetch(imgSrc).then((res) => res.blob());
    const file = new File([blob], 'image.png', { type: 'image/png' });
    const imgUrl = await getContentCtrlVImage(file, String(team));
    img.setAttribute('src', imgUrl);

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
