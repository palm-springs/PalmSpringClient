import { createToast } from '@/utils/lib/toast';

export const inviteErrorNotify = createToast({
  type: 'ERROR',
  message: '초대된 사용자가 아닙니다. 다시 로그인해주세요.',
  id: 'invalid invited error',
  duration: 3000,
});

export const noUserErrorNotify = createToast({
  type: 'ERROR',
  message: '로그인이 필요합니다.',
  id: 'no user',
  duration: 3000,
});

export const failLogin = createToast({
  type: 'ERROR',
  message: '로그인 정보가 올바르지 않습니다',
  id: 'login',
  duration: 3000,
});

export const failSignup = createToast({
  type: 'ERROR',
  message: '이미 가입된 이메일이에요',
  id: 'signup email already exists',
  duration: 3000,
});

export const failSignupOauth = createToast({
  type: 'ERROR',
  message: '구글 로그인으로 이미 가입된 이메일이에요',
  id: 'signup email already exists',
  duration: 3000,
});

export const failSendEmail = createToast({
  type: 'ERROR',
  message: '이메일 발송에 실패했습니다',
  id: 'sending verify email',
  duration: 3000,
});

export const successResetPassword = createToast({
  type: 'NORMAL',
  message: '비밀번호가 재설정되었어요. 다시 로그인해주세요',
  id: 'success on reset password',
  duration: 3000,
});

export const failResetPassword = createToast({
  type: 'ERROR',
  message: '비밀번호 재설정에 실패했습니다.',
  id: 'success on reset password',
  duration: 3000,
});
export const welcomeSignup = createToast({
  type: 'NORMAL',
  message: '가입이 완료되었어요! palms.blog에 오신 것을 환영합니다 😎',
  id: 'success on reset password',
  duration: 3000,
});
export const successChangeUserInfo = createToast({
  type: 'NORMAL',
  message: '변경 사항이 저장되었습니다',
  id: 'success on changing user information',
  duration: 3000,
});

export const errorChangeUserInfo = (message: string) => {
  createToast({
    type: 'ERROR',
    message,
    id: 'error on changing user information',
    duration: 3000,
  })();
};
// 회원가입 비밀번호 조건 검사
export const capitalCheck = (password: string) => {
  return /[A-Z]/.test(password);
};
export const numberCheck = (password: string) => {
  return /[0-9]/.test(password);
};
export const specialCharCheck = (password: string) => {
  return /[^\w\s]/.test(password);
};
