import { uploadContentImage, uploadImage } from '@/api/common';
import { imageErrorCase } from '@/constants/image';

//common -> get 어쩌구 불러오기
export const getImageMultipartData = async (value: File) => {
  const formData = new FormData();
  formData.append('image', value);

  const data = await uploadImage(formData);
  if (data.code === 201) return data.data;
  else if (data.code === 406 || data.code === 413) return imageErrorCase.sizeError;
};

//article, page 와 같은 content 이미지 저장하기
export const getContentImageMultipartData = async (value: File, blogUrl: string) => {
  const formData = new FormData();
  formData.append('image', value);
  formData.append('blogUrl', blogUrl);

  const { data } = await uploadContentImage(blogUrl, formData);
  return data;
};

//content 복붙 이미지 s3 변환 로직
export const getContentCtrlVImage = async (value: Blob, blogUrl: string) => {
  const formData = new FormData();
  formData.append('image', value);
  formData.append('blogUrl', blogUrl);

  const { data } = await uploadContentImage(blogUrl, formData);
  return data;
};
