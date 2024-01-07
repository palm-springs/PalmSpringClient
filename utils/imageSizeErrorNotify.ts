import { createToast } from './lib/toast';

export const imageSizeErrorNotify = createToast({
  type: 'ERROR',
  message: '이미지 파일은 최대 10MB까지 가능합니다.',
  id: 'error on image size',
});
