'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { sendVerifyEmail } from '@/api/auth';
import { failSendEmail } from '@/utils/auth';
import checkEmailForm from '@/utils/checkEmailForm';

import BgButton from '../../ui/BgButton';
import FlexContainer from '../../ui/FlexContainer';
import Input from '../../ui/Input';
import LinkButton from '../../ui/LinkButton';
import Title from '../../ui/Title';

const PasswordLanding = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const sendResetEmail = async () => {
    // 이메일 인증 API 호출
    const data = await sendVerifyEmail({ type: 'reset', email });
    if (!data) return;

    // 성공시
    if (data.code === 201) {
      router.push(`/login/password/email-sent?email=${email}`);
    }

    // 실패시 토스트
    else failSendEmail();
  };

  return (
    <FlexContainer margin={'16rem 0'}>
      <Title>비밀번호 재설정</Title>

      <Input value={email} setValue={(newValue) => setEmail(newValue)} type="email">
        이메일
      </Input>

      <BgButton disabled={!checkEmailForm(email)} onClick={sendResetEmail}>
        인증 메일 발송
      </BgButton>
      <LinkButton href="/login">로그인</LinkButton>
    </FlexContainer>
  );
};

export default PasswordLanding;
