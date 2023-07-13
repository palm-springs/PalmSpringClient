'use client';
import styled from 'styled-components';

interface InputMessageProps {
  isAddressDuplicate: boolean;
}

const InputMessage = (props: InputMessageProps) => {
  const { isAddressDuplicate } = props;

  return (
    <Message $isAddressDuplicate={isAddressDuplicate}>
      {isAddressDuplicate ? '이미 사용 중인 주소입니다. 다른 주소를 입력해주세요.' : '사용 가능한 주소입니다.'}
    </Message>
  );
};

export default InputMessage;

const Message = styled.span<{ $isAddressDuplicate: boolean }>`
  position: absolute;
  bottom: -2rem;
  ${({ theme }) => theme.fonts.Caption};
  margin-top: 0.6rem;

  color: ${({ theme, $isAddressDuplicate }) => ($isAddressDuplicate ? theme.colors.red : theme.colors.green)};
`;
