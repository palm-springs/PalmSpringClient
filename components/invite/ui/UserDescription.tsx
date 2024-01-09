'use client';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { InviteInfoProps } from '@/types/user';

import { invitedUserDataState } from '../states/userData';

import TextInputForm from './common/TextInputForm';

const UserDescription = (props: InviteInfoProps) => {
  const { isFocus, handleOnFocus, handleOnChange } = props;
  const { description } = useRecoilValue(invitedUserDataState);

  return (
    <TextInputForm type={'description'} text={'한 줄 소개'} isFocus={isFocus}>
      <TextAreaInput
        id={'description'}
        placeholder="한 줄 소개를 입력해주세요"
        onFocus={() => handleOnFocus('description', true)}
        onBlur={() => handleOnFocus('description', false)}
        value={description}
        onChange={handleOnChange}
      />
    </TextInputForm>
  );
};

export default UserDescription;

// input (textarea)
const TextAreaInput = styled.textarea`
  ${({ theme }) => theme.fonts.Body2_Regular};
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
  &:focus {
    outline: none;
  }
`;
