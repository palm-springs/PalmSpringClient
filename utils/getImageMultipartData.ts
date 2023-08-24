import { uploadImage } from '@/api/common';

//common -> get 어쩌구 불러오기
export const getImageMultipartData = async (value: File, blogUrl: string) => {
  const formData = new FormData();
  formData.append('image', value);

  const { data } = await uploadImage(blogUrl, formData);
  return data;
};
