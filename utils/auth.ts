import { createToast } from '@/utils/lib/toast';

export const inviteErrorNotify = createToast({
  type: 'ERROR',
  message: '초대된 사용자가 아닙니다. 다시 로그인해주세요.',
  id: 'error on invalid invited error',
  duration: 3000,
});

export const noUserErrorNotify = createToast({
  type: 'ERROR',
  message: '로그인이 필요합니다.',
  id: 'error on no user',
  duration: 3000,
});

export const wrongPlatformNotify = createToast({
  type: 'ERROR',
  message: 'Gmail 계정만 사용 가능합니다.',
  id: 'error on ogin platform',
  duration: 3000,
});
