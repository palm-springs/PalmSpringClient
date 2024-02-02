'use client';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { addressDuplicateState, createBlogDataState, invalidTextState, isReservedUrlState } from '../../states/atom';

const InputMessage = () => {
  const isAddressDuplicate = useRecoilValue(addressDuplicateState);
  const isInvalidText = useRecoilValue(invalidTextState);
  const isReservedUrl = useRecoilValue(isReservedUrlState);

  const { url } = useRecoilValue(createBlogDataState);

  let message = '';
  if (url === '') {
    message = '';
  } else if (isInvalidText) {
    message = '사용할 수 없는 문자가 있습니다.';
  } else if (isReservedUrl) {
    message = '사용할 수 없는 주소입니다. 다른 주소를 입력해주세요.';
  } else if (isAddressDuplicate === null) {
    message = '';
  } else if (isAddressDuplicate) {
    message = '이미 사용 중인 주소입니다. 다른 주소를 입력해주세요.';
  } else {
    message = '사용 가능한 주소입니다.';
  }

  return <Message $isInvalid={isAddressDuplicate || isInvalidText || isReservedUrl}>{message}</Message>;
};

export default InputMessage;

const Message = styled.span<{ $isInvalid: boolean }>`
  position: absolute;
  bottom: -2rem;
  ${({ theme }) => theme.fonts.Caption};
  margin-top: 0.6rem;

  color: ${({ theme, $isInvalid }) => ($isInvalid ? theme.colors.red : theme.colors.green)};
`;
