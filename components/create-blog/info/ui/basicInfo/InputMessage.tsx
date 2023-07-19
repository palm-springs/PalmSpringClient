'use client';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { invalidTextState } from '../../states/atom';

interface InputMessageProps {
  isAddressDuplicate: boolean;
}

const InputMessage = (props: InputMessageProps) => {
  const { isAddressDuplicate } = props;
  const isInvalidText = useRecoilValue(invalidTextState);

  return (
    <Message $isInvalid={isAddressDuplicate || isInvalidText}>
      {isInvalidText
        ? '사용할 수 없는 문자가 있습니다.'
        : isAddressDuplicate
        ? '이미 사용 중인 주소입니다. 다른 주소를 입력해주세요.'
        : '사용 가능한 주소입니다.'}
    </Message>
  );
};

export default InputMessage;

const Message = styled.span<{ $isInvalid: boolean }>`
  position: absolute;
  bottom: -2rem;
  ${({ theme }) => theme.fonts.Caption};
  margin-top: 0.6rem;

  color: ${({ theme, $isInvalid }) => ($isInvalid ? theme.colors.red : theme.colors.green)};
`;
