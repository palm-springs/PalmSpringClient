'use client';
import styled from 'styled-components';

// import InputMessage from '@/components/create-blog/info/ui/basicInfo/InputMessage';

interface UserIdCheckProps {
  children: React.ReactNode;
  isFocus: boolean;
  isDuplicate: boolean | null;
}

const IdInputForm = (props: UserIdCheckProps) => {
  const { children, isFocus, isDuplicate } = props;
  console.log(isDuplicate);

  return (
    <>
      <InputContainer id={isDuplicate ? 'failed' : ''} $isFocus={isFocus}>
        {children}
      </InputContainer>
    </>
  );
};

export default IdInputForm;

// text input 입력  컨테이너
const InputContainer = styled.div<{ $isFocus: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid;

  border-radius: 0.8rem;

  border-color: ${({ theme, $isFocus }) => ($isFocus ? theme.colors.grey_700 : theme.colors.grey_400)};

  padding: 1rem 1.2rem;
  width: 100%;
  height: 4.6rem;

  &#failed {
    border-color: ${({ theme }) => theme.colors.red};
  }

  &#success {
    border-color: ${({ theme }) => theme.colors.green};
  }

  & > div {
    ${({ theme }) => theme.fonts.Body2_Regular};
    color: ${({ theme }) => theme.colors.grey_600};
  }

  & > svg {
    position: absolute;
    right: 28.4rem;
    transform-origin: 50% 50%;

    animation: rotate_image 5s linear infinite;

    @keyframes rotate_image {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
