import axios from 'axios';

import { getContentCtrlVImage } from './getImageMultipartData';

export const getChangedImgSrc = async (img: Element, team: string): Promise<string | undefined> => {
  // src뽑아내기
  const imgSrc = img.getAttribute('src');
  let blob;
  if (!imgSrc) return;

  // 외부 링크인 경우 다운로드해서 blobUrl 반환 받기
  if (!imgSrc.startsWith('data:')) {
    try {
      // 이미지 다운로드 (이미지 URI 인코딩해서 전송)
      const response = await axios.get(`/api/get-image?imageUrl=${encodeURIComponent(imgSrc)}`, {
        responseType: 'blob',
      });

      blob = response.data;
    } catch (error) {
      console.log('Failed to download image');
    }
  } else {
    // base64 -> blob
    blob = await fetch(imgSrc).then((res) => res.blob());
  }

  const file = new File([blob], 'image.png', { type: blob.type });
  const imgUrl = await getContentCtrlVImage(file, String(team));

  img.setAttribute('src', imgUrl);
  return imgUrl;
};
