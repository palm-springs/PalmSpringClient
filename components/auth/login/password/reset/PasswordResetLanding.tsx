'use client';
import React, { useState } from 'react';

import BgButton from '@/components/auth/ui/BgButton';
import ConditionCheck from '@/components/auth/ui/ConditionCheck';
import DisabledInput from '@/components/auth/ui/DisabledInput';
import FlexContainer from '@/components/auth/ui/FlexContainer';
import Input from '@/components/auth/ui/Input';
import LinkButton from '@/components/auth/ui/LinkButton';
import Title from '@/components/auth/ui/Title';
import { capitalCheck, numberCheck, specialCharCheck } from '@/utils/auth';

const PasswordResetLanding = () => {
  const [{ password, passwordCheck }, setValue] = useState({ password: '', passwordCheck: '' });
  return (
    <FlexContainer>
      <Title>비밀번호 재설정</Title>

      <DisabledInput value={'you@example.com'}>이메일</DisabledInput>
      <Input value={password} setValue={(newValue: string) => setValue((prev) => ({ ...prev, password: newValue }))}>
        새로운 비밀번호
      </Input>
      <Input
        value={passwordCheck}
        setValue={(newValue: string) => setValue((prev) => ({ ...prev, passwordCheck: newValue }))}>
        새로운 비밀번호 확인
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
            password !== ''
          )
        }>
        비밀번호 재설정
      </BgButton>
      <LinkButton href="/login">로그인</LinkButton>
    </FlexContainer>
  );
};

export default PasswordResetLanding;
