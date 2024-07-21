import axios from 'axios';

import { getContentCtrlVImage } from './getImageMultipartData';

export const getChangedImgSrc = async (img: Element, team: string): Promise<string | undefined> => {
  // src뽑아내기
  const imgSrc = img.getAttribute('src');
  let blob;
  if (!imgSrc) return;

  // 외부 링크인 경우
  if (!imgSrc.startsWith('data:')) {
    // sessionStorage에 이미 값 있으면 활용
    const imgUrl = sessionStorage.getItem(imgSrc);
    if (imgUrl) img.setAttribute('src', imgUrl);
    else {
      try {
        // 이미지 다운로드 (이미지 URI 인코딩해서 전송) 후 갈아끼우기
        const response = await axios.get(`/api/get-image?imageUrl=${encodeURIComponent(imgSrc)}`, {
          responseType: 'blob',
        });

        blob = response.data;
        const file = new File([blob], 'image.png', { type: blob.type });
        const imgUrl = await getContentCtrlVImage(file, String(team));

        img.setAttribute('src', imgUrl);
      } catch (error) {
        console.log('failed to download image');
      }
    }
  }
  //base64인 경우
  else {
    // base64 -> blob 후 갈아끼우기
    blob = await fetch(imgSrc).then((res) => res.blob());
    const file = new File([blob], 'image.png', { type: blob.type });
    const imgUrl = await getContentCtrlVImage(file, String(team));

    img.setAttribute('src', imgUrl);
  }
};
