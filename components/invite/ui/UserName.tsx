import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { InviteInfoProps } from '@/types/user';

import { invitedUserDataState } from '../states/userData';

import TextInputForm from './common/TextInputForm';

const UserName = (props: InviteInfoProps) => {
  const { isFocus, handleOnChange, handleOnFocus } = props;
  const { nickname } = useRecoilValue(invitedUserDataState);

  return (
    <TextInputForm type={'name'} text={'이름'} isFocus={isFocus}>
      <TextInput
        id={'nickname'}
        placeholder="이름을 입력해주세요"
        onFocus={() => handleOnFocus('nickname', true)}
        onBlur={() => handleOnFocus('nickname', false)}
        value={nickname}
        onChange={handleOnChange}
      />
    </TextInputForm>
  );
};

export default UserName;

// input (text)
const TextInput = styled.input`
  ${({ theme }) => theme.fonts.Body2_Regular};
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
  &:focus {
    outline: none;
  }
`;
