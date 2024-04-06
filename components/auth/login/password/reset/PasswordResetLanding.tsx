'use client';
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { Router } from 'next/router';

import { getVerifyEmail, resetPassword } from '@/api/auth';
import BgButton from '@/components/auth/ui/BgButton';
import ConditionCheck from '@/components/auth/ui/ConditionCheck';
import DisabledInput from '@/components/auth/ui/DisabledInput';
import FlexContainer from '@/components/auth/ui/FlexContainer';
import Input from '@/components/auth/ui/Input';
import LinkButton from '@/components/auth/ui/LinkButton';
import Title from '@/components/auth/ui/Title';
import InviteNotFound from '@/components/invite/ui/InviteNotFound';
import { capitalCheck, failResetPassword, numberCheck, specialCharCheck, successResetPassword } from '@/utils/auth';

const PasswordResetLanding = () => {
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;
  const [isDisabled, setIsDisabled] = useState(false);

  const [{ email, password, passwordCheck }, setValue] = useState({
    email: sessionStorage?.getItem('email') || '',
    password: '',
    passwordCheck: '',
  });

  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (sessionStorage?.getItem('isVerify') !== 'true' && isDisabled === false) {
      const verifyEmail = async () => {
        if (code) {
          const data = await getVerifyEmail('reset', code);
          if (!data) return;
          if (data.code !== 200) {
            return <InviteNotFound type="reset" />;
          } else {
            if (data.data) {
              setValue((prev) => ({ ...prev, email: data.data?.email }));
              sessionStorage?.setItem('email', data.data.email);
              sessionStorage?.setItem('isVerify', 'true');
            }
          }
        }
      };
      verifyEmail();
    }
  });

  const handleResetPassword = async () => {
    const data = await resetPassword({ email, password });
    if (!data) return;
    if (data.code === 200) {
      successResetPassword();
      sessionStorage?.removeItem('isVerify');
      sessionStorage?.removeItem('email');
      setIsDisabled(true);
    } else {
      failResetPassword();
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
      <FlexContainer margin={'12rem 0'}>
        <Title>비밀번호 재설정</Title>

        <DisabledInput value={email || ''}>이메일</DisabledInput>
        {isDisabled ? (
          <>
            <DisabledInput value={password}>새로운 비밀번호</DisabledInput>
            <DisabledInput value={password}>새로운 비밀번호 확인</DisabledInput>
          </>
        ) : (
          <>
            <Input
              value={password}
              setValue={(newValue: string) => setValue((prev) => ({ ...prev, password: newValue }))}
              type="password">
              새로운 비밀번호
            </Input>
            <Input
              value={passwordCheck}
              setValue={(newValue: string) => setValue((prev) => ({ ...prev, passwordCheck: newValue }))}
              type="password">
              새로운 비밀번호 확인
            </Input>
          </>
        )}

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
              password !== ''
            )
          }
          onClick={handleResetPassword}>
          비밀번호 재설정
        </BgButton>
        <LinkButton href="/login">로그인</LinkButton>
      </FlexContainer>
    </>
  );
};

export default PasswordResetLanding;
