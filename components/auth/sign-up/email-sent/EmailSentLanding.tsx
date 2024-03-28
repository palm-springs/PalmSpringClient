import DisabledInput from '../../ui/DisabledInput';
import FlexContainer from '../../ui/FlexContainer';
import GreenMessageBox from '../../ui/GreenMessageBox';
import LinkButton from '../../ui/LinkButton';
import Title from '../../ui/Title';

const EmailSentLanding = () => {
  return (
    <FlexContainer margin={'10rem 0'}>
      <Title>회원가입</Title>

      <DisabledInput value={'you@example.com'}>이메일</DisabledInput>
      <GreenMessageBox>
        위 이메일로 인증 링크를 담은 메일을 보내드렸어요.
        <br /> 가입 완료를 위해서 이메일에서 인증을 마쳐주세요.
      </GreenMessageBox>

      <LinkButton href="/login">로그인</LinkButton>
    </FlexContainer>
  );
};

export default EmailSentLanding;
