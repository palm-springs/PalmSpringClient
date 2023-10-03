// 이메일 유효성 검증 함수
const checkEmailForm = (emailValue: string) => {
  const regularExpression =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return regularExpression.test(String(emailValue).toLowerCase());
};

export default checkEmailForm;
