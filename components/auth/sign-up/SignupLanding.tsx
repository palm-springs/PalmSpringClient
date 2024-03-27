import React from 'react';

import GoogleLoginLanding from '../login/GoogleLoginLanding';
import BgButton from '../ui/BgButton';
import ConditionCheck from '../ui/ConditionCheck';
import Contour from '../ui/Contour';
import FlexContainer from '../ui/FlexContainer';
import Input from '../ui/Input';
import LinkButton from '../ui/LinkButton';
import Title from '../ui/Title';

const SignupLanding = () => {
  return (
    <FlexContainer>
      <Title>회원가입</Title>
      <GoogleLoginLanding />
      <Contour>or</Contour>

      <Input>이메일</Input>
      <Input>비밀번호</Input>
      <Input>비밀번호 확인</Input>

      <ConditionCheck isSatisfied={true}>대문자 1자 이상</ConditionCheck>
      <ConditionCheck isSatisfied={true}>숫자 1자 이상</ConditionCheck>
      <ConditionCheck isSatisfied={false}>특수문자 1자 이상</ConditionCheck>
      <ConditionCheck isSatisfied={true}>전체 8자 이상</ConditionCheck>
      <ConditionCheck isSatisfied={true}>비밀번호 확인 일치</ConditionCheck>

      <BgButton disabled={true}>인증 메일 발송</BgButton>

      <LinkButton href="/login">로그인</LinkButton>
    </FlexContainer>
  );
};

export default SignupLanding;
