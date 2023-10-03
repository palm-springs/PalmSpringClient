'use client';
import { ChangeEvent, Dispatch, KeyboardEvent, RefObject, SetStateAction, useRef, useState } from 'react';
import styled from 'styled-components';

import { emailData } from '@/types/member';
import checkEmailForm from '@/utils/checkEmailForm';

import EmailBox from './EmailBox';

interface AddMemberInputProps {
  emailInputRef: RefObject<HTMLInputElement>;
  setIsError: Dispatch<SetStateAction<boolean>>;
}

const AddMemberInput = (props: AddMemberInputProps) => {
  const { emailInputRef, setIsError } = props;

  const [emailValue, setEmailValue] = useState('');
  const [emailList, setEmailList] = useState<emailData[]>([]);

  // 입력된 값의 구분 key 여부
  const isDivisionKey = useRef(false);

  // input 입력시
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (isDivisionKey.current) {
      isDivisionKey.current = false;
    } else {
      setEmailValue(value);
    }
  };

  // 이메일 구분 key가 눌렸을 때
  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key === 'Enter' || key === ' ' || key === ',') {
      isDivisionKey.current = true;
      if (emailValue !== '') {
        const newEmailList = [...emailList, { emailValue, verification: checkEmailForm(emailValue) }];
        setEmailList(newEmailList);
        setEmailValue('');
        setIsError(!newEmailList.find(({ verification }) => !verification) ? false : true);
      }
    }
  };

  // 삭제 버튼 클릭시
  const handleCloseClick = (targetIdx: number) => {
    const newEmailList = emailList.filter((_, idx) => idx !== targetIdx);
    setEmailList(newEmailList);
    setIsError(!newEmailList.find(({ verification }) => !verification) ? false : true);
  };

  // 입력된 email 렌더링
  const EmailBoxList = emailList.map((emailData, idx) => {
    return (
      <EmailBox
        key={`${emailData.emailValue}_${idx}`}
        emailData={emailData}
        idx={idx}
        handleCloseClick={handleCloseClick}
      />
    );
  });

  return (
    <AddMemberInputContainer>
      {EmailBoxList}
      <Input value={emailValue} onChange={handleInputChange} onKeyDown={handleInputKeyDown} ref={emailInputRef} />
    </AddMemberInputContainer>
  );
};

export default AddMemberInput;

const AddMemberInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 1.2rem;

  width: 100%;
`;

const Input = styled.input`
  ${({ theme }) => theme.fonts.Body3_Regular};
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
