// 이메일 유효성 검증 함수
const checkEmailForm = (emailValue: string) => {
  // 이메일 형식 정규표현식
  const regularExpression =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return regularExpression.test(String(emailValue).toLowerCase());
};

export default checkEmailForm;
