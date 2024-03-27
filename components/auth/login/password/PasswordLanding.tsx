import React from 'react';

import BgButton from '../../ui/BgButton';
import FlexContainer from '../../ui/FlexContainer';
import Input from '../../ui/Input';
import LinkButton from '../../ui/LinkButton';
import Title from '../../ui/Title';

const PasswordLanding = () => {
  return (
    <FlexContainer>
      <Title>비밀번호 재설정</Title>

      <Input>이메일</Input>

      <BgButton>인증 메일 발송</BgButton>
      <LinkButton href="/login">로그인</LinkButton>
    </FlexContainer>
  );
};

export default PasswordLanding;
