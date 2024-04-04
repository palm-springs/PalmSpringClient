'use client';
import React, { useRef, useState } from 'react';

import { capitalCheck, numberCheck, specialCharCheck } from '@/utils/auth';
import checkEmailForm from '@/utils/checkEmailForm';

import GoogleLoginLanding from '../login/GoogleLoginLanding';
import BgButton from '../ui/BgButton';
import ConditionCheck from '../ui/ConditionCheck';
import Contour from '../ui/Contour';
import FlexContainer from '../ui/FlexContainer';
import Input from '../ui/Input';
import LinkButton from '../ui/LinkButton';
import Title from '../ui/Title';

const SignupLanding = () => {
  const [{ email, password, passwordCheck }, setValue] = useState({ email: '', password: '', passwordCheck: '' });

  return (
    <FlexContainer margin={'10rem 0'}>
      <Title>회원가입</Title>
      <GoogleLoginLanding />
      <Contour>or</Contour>

      <Input value={email} setValue={(newValue: string) => setValue((prev) => ({ ...prev, email: newValue }))}>
        이메일
      </Input>
      <Input value={password} setValue={(newValue: string) => setValue((prev) => ({ ...prev, password: newValue }))}>
        비밀번호
      </Input>
      <Input
        value={passwordCheck}
        setValue={(newValue: string) => setValue((prev) => ({ ...prev, passwordCheck: newValue }))}>
        비밀번호 확인
      </Input>

      <ConditionCheck isSatisfied={capitalCheck(password)}>대문자 1자 이상</ConditionCheck>
      <ConditionCheck isSatisfied={numberCheck(password)}>숫자 1자 이상</ConditionCheck>
      <ConditionCheck isSatisfied={specialCharCheck(password)}>특수문자 1자 이상</ConditionCheck>
      <ConditionCheck isSatisfied={password.length >= 8}>전체 8자 이상</ConditionCheck>
      <ConditionCheck isSatisfied={password === passwordCheck && password !== ''}>비밀번호 확인 일치</ConditionCheck>

      <BgButton
        disabled={
          !(
            capitalCheck(password) &&
            numberCheck(password) &&
            specialCharCheck(password) &&
            password.length >= 8 &&
            password === passwordCheck &&
            password !== '' &&
            checkEmailForm(email)
          )
        }>
        인증 메일 발송
      </BgButton>

      <LinkButton href="/login">로그인</LinkButton>
    </FlexContainer>
  );
};

export default SignupLanding;
