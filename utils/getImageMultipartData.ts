import { uploadImage } from '@/api/common';

//common -> get 어쩌구 불러오기
export const getImageMultipartData = (value: File) => {
  const formData = new FormData();
  formData.append('image', value);

  return uploadImage(formData);
};
