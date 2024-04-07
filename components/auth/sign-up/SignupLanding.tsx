'use client';
import React, { useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { platformRegister, sendVerifyEmail } from '@/api/auth';
import { capitalCheck, failSendEmail, failSignup, failSignupOauth, numberCheck, specialCharCheck } from '@/utils/auth';
import checkEmailForm from '@/utils/checkEmailForm';
import { checkSessionStorage } from '@/utils/checkSessionStorage';

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
  const emailRef = useRef<HTMLInputElement>(null);

  const sessionStorage = checkSessionStorage();
  const router = useRouter();

  const signup = async () => {
    // 회원가입 API 호출
    const data = await platformRegister({ email, password });
    if (!data) return;
    const { code, message } = data;

    // 성공시
    if (code === 201) {
      // 이메일 인증 API 호출
      const data = await sendVerifyEmail({ type: 'register', email, password });
      if (!data) return;
      // 성공시
      if (data.code === 201 || data.code === 200) {
        sessionStorage?.setItem('email', email);
        router.push(`/sign-up/email-sent`);
      }
      // 실패시 토스트
      else failSendEmail();
    }

    // 실패시
    else if (code === 400) {
      // OAuth로 이미 가입한 이력이 있음
      if (message === 'User already register by OAuth.') {
        failSignupOauth();
      }
      // string 이메일로 이미 가입한 이력이 있음
      else if (message === 'User already register by Internal.') {
        failSignup();
      }
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName=""
        containerStyle={{
          top: 20,
          right: 24,
        }}
      />
      <FlexContainer margin={'10rem 0'}>
        <Title>회원가입</Title>
        <GoogleLoginLanding />
        <Contour>or</Contour>

        <Input
          value={email}
          setValue={(newValue: string) => setValue((prev) => ({ ...prev, email: newValue }))}
          ref={emailRef}
          type="email">
          이메일
        </Input>
        <Input
          value={password}
          setValue={(newValue: string) => setValue((prev) => ({ ...prev, password: newValue }))}
          type="password">
          비밀번호
        </Input>
        <Input
          value={passwordCheck}
          setValue={(newValue: string) => setValue((prev) => ({ ...prev, passwordCheck: newValue }))}
          type="password">
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
          }
          onClick={signup}>
          인증 메일 발송
        </BgButton>

        <LinkButton href="/login">로그인</LinkButton>
      </FlexContainer>
    </>
  );
};

export default SignupLanding;
