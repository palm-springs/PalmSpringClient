'use client';
import styled from 'styled-components';

interface PublishInputFormProps {
  children: React.ReactNode;
  isFocus: boolean;
  isDuplicate: boolean | null;
}

const PublishInputForm = (props: PublishInputFormProps) => {
  const { children, isFocus, isDuplicate } = props;
  return (
    // <>
    <InputContainer id={isDuplicate ? 'failed' : ''} $isFocus={isFocus}>
      {children}
    </InputContainer>
    // </>
  );
};

export default PublishInputForm;

const InputContainer = styled.div<{ $isFocus: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid;
  border-radius: 0.8rem;

  border-color: ${({ theme, $isFocus }) => ($isFocus ? theme.colors.grey_700 : theme.colors.grey_400)};

  padding: 1rem 1.2rem;
  width: 54rem;
  height: 4.6rem;

  &#failed {
    border-color: ${({ theme }) => theme.colors.red};
  }

  & > div {
    ${({ theme }) => theme.fonts.Body2_Regular};
    color: ${({ theme }) => theme.colors.grey_600};
  }

  & > svg {
    position: absolute;
    right: 1.2rem;
    transform-origin: 50% 50%;

    animation: rotate_image 5s linear infinite;

    @keyframes rotate_image {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
