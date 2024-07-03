import { postExternalImage } from '@/api/postImage';

import { getContentCtrlVImage } from './getImageMultipartData';

export const getChangedImgSrc = async (img: Element, team: string): Promise<string | undefined> => {
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
};
