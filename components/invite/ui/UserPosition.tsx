'use client';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { InviteInfoProps } from '@/types/user';

import { invitedUserDataState } from '../states/userData';

import TextInputForm from './common/TextInputForm';

const UserPosition = (props: InviteInfoProps) => {
  const { isFocus, handleOnChange, handleOnFocus } = props;
  const { job } = useRecoilValue(invitedUserDataState);

  return (
    <TextInputForm type={'position'} text={'직책'} isFocus={isFocus}>
      <TextInput
        id={'job'}
        placeholder="직책을 입력해주세요"
        onFocus={() => handleOnFocus('job', true)}
        onBlur={() => handleOnFocus('job', false)}
        value={job}
        onChange={handleOnChange}
      />
    </TextInputForm>
  );
};

export default UserPosition;

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
