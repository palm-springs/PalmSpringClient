'use client';
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import styled from 'styled-components';

import EmailBox from './EmailBox';

const AddMemberInput = () => {
  const [emailValue, setEmailValue] = useState('');
  const [emailList, setEmailList] = useState<string[]>([]);

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
      setEmailList([...emailList, emailValue]);
      setEmailValue('');
      isDivisionKey.current = true;
    }
  };

  // 삭제 버튼 클릭시
  const handleCloseClick = (targetEmail: string) => {
    const newEmailList = emailList.filter((email) => email !== targetEmail);
    setEmailList(newEmailList);
  };

  /** email 중복 입력이 안된다는 가정 하에 구현 */
  // 입력된 email 렌더링
  const EmailBoxList = emailList.map((email) => {
    return <EmailBox key={email} email={email} onClick={handleCloseClick} />;
  });

  return (
    <AddMemberInputContainer>
      {EmailBoxList}
      <Input value={emailValue} onChange={handleInputChange} onKeyDown={handleInputKeyDown} />
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
  ${({ theme }) => theme.fonts.Body1_Regular};
  border: none;

  &:focus {
    outline: none;
  }
`;
