import { createToast } from './lib/toast';

export const NotifyDuplicatedCategory = createToast({
  type: 'ERROR',
  message: '이미 존재하는 카테고리에요.',
  id: 'duplicated category',
  duration: 3000,
});
