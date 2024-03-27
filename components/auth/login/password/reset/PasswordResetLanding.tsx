import React from 'react';

import BgButton from '@/components/auth/ui/BgButton';
import DisabledInput from '@/components/auth/ui/DisabledInput';
import FlexContainer from '@/components/auth/ui/FlexContainer';
import Input from '@/components/auth/ui/Input';
import LinkButton from '@/components/auth/ui/LinkButton';
import Title from '@/components/auth/ui/Title';

const PasswordResetLanding = () => {
  return (
    <FlexContainer>
      <Title>비밀번호 재설정</Title>

      <DisabledInput value={'you@example.com'}>이메일</DisabledInput>
      <Input>새로운 비밀번호</Input>
      <Input>새로운 비밀번호 확인</Input>

      <BgButton>비밀번호 재설정</BgButton>
      <LinkButton href="/login">로그인</LinkButton>
    </FlexContainer>
  );
};

export default PasswordResetLanding;
