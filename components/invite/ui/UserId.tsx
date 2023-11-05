'use client';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { Loader01Icon } from '@/public/icons';
import { InviteInfoProps } from '@/types/user';

import { invitedUserDataState } from '../states/userData';

import TextIdInputForm from './common/TextIdInputForm';

interface UserIdProps extends InviteInfoProps {
  isDuplicate: boolean | null;
  blogUrl: string;
}

const UserId = (props: UserIdProps) => {
  const { isFocus, handleOnChange, handleOnFocus, isDuplicate, blogUrl } = props;
  const { url } = useRecoilValue(invitedUserDataState);

  return (
    <TextIdInputForm text={'ID'} isFocus={isFocus} isDuplicate={isDuplicate}>
      <div className="urlText">/@{blogUrl}/author/</div>
      <TextInput
        id={'url'}
        onFocus={() => handleOnFocus('url', true)}
        onBlur={() => handleOnFocus('url', false)}
        value={url as string}
        onChange={handleOnChange}
      />
      {isDuplicate === null && url !== '' && <Loader01Icon />}
      {isDuplicate && <Message>이미 사용 중인 URL입니다. 다른 ID 입력해주세요.</Message>}
      {isDuplicate === false && url !== '' && url !== null && (
        <Message className="success">사용 가능한 ID입니다.</Message>
      )}
    </TextIdInputForm>
  );
};

export default UserId;

const Message = styled.div`
  ${({ theme }) => theme.fonts.Caption};
  position: absolute;
  top: 4.9rem;
  left: 0;

  width: 100%;
  color: ${({ theme }) => theme.colors.red};

  &.success {
    color: ${({ theme }) => theme.colors.green};
  }
`;

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
