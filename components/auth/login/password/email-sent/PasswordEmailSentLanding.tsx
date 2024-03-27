import DisabledInput from '@/components/auth/ui/DisabledInput';
import FlexContainer from '@/components/auth/ui/FlexContainer';
import GreenMessageBox from '@/components/auth/ui/GreenMessageBox';
import LinkButton from '@/components/auth/ui/LinkButton';
import Title from '@/components/auth/ui/Title';

const PasswordEmailSentLanding = () => {
  return (
    <FlexContainer>
      <Title>비밀번호 재설정</Title>

      <DisabledInput value={'you@example.com'}>이메일</DisabledInput>

      <GreenMessageBox>
        위 이메일로 인증 링크를 담은 메일을 보내드렸어요.
        <br /> 비밀번호 재설정을 위해서 이메일에서 인증을 마쳐주세요.
      </GreenMessageBox>

      <LinkButton href="/login">로그인</LinkButton>
    </FlexContainer>
  );
};

export default PasswordEmailSentLanding;
