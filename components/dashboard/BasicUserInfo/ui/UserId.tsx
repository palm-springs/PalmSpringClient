'use client';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { Loader01Icon } from '@/public/icons';
import CheckUserIdDuplication from '@/utils/checkUserIdDuplication';

import { userInfoState } from '../state/user';

import IdInputForm from './IdInputForm';

interface UserIdCheckProps {
  isDuplicate: boolean | null;
  setIsDuplicate: Dispatch<SetStateAction<boolean | null>>;
  previousUrl: string | null | undefined;
}

const UserId = (props: UserIdCheckProps) => {
  const { isDuplicate, setIsDuplicate, previousUrl } = props; //구조 분해 할당

  const [isUserIdFocus, setIsUserIdFocus] = useState(false);

  const { team } = useParams();
  const [{ url }, setUserInfoData] = useRecoilState(userInfoState);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setUserInfoData((prev) => ({ ...prev, url: value }));
    CheckUserIdDuplication(team, value, setIsDuplicate);
  };

  return (
    <UserIdContainer>
      <UserIdTitle>ID</UserIdTitle>
      <InputWidthContainer>
        <IdInputForm isFocus={isUserIdFocus} isDuplicate={isDuplicate} url={url} 
            isChanged={previousUrl !== url}>
          <div>/@{team}/author/</div>
          <TextInput
            onFocus={() => setIsUserIdFocus(true)}
            onBlur={() => setIsUserIdFocus(false)}
            value={url ? url : ''}
            onChange={handleOnChange}
          />
          {isDuplicate === null && url !== '' && <Loader01Icon />}
        </IdInputForm>
        {previousUrl !== url && isDuplicate && <Message>이미 사용 중인 URL입니다. 다른 ID 입력해주세요.</Message>}
        {previousUrl !== url && !isDuplicate && url !== '' && url !== null && (
          <Message className="success">사용 가능한 ID입니다.</Message>
        )}
      </InputWidthContainer>
    </UserIdContainer>
  );
};

export default UserId;

const Message = styled.div`
  ${({ theme }) => theme.fonts.Caption};
  margin-top: 0.6rem;

  color: ${({ theme }) => theme.colors.red};

  &.success {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const InputWidthContainer = styled.div`
  width: 64.5rem;
`;

const UserIdContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.2rem;
`;

const UserIdTitle = styled.span`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin: 1rem 15rem 0.8rem 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_900};
`;

const TextInput = styled.input`
  ${({ theme }) => theme.fonts.Body2_Regular};

  border: none;

  padding: 0;

  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.grey_900};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }

  &:focus {
    outline: none;
    border: 0px solid ${({ theme }) => theme.colors.grey_700};
  }
`;
