'use client';
import styled from 'styled-components';

import { CloseIcon } from '@/public/icons';

interface AddMemberFormProps {
  width: string;
  height: string;
  paddingUD: string;
  paddingLR: string;
}
const AddMemberForm = (props: AddMemberFormProps) => {
  const { width, height, paddingUD, paddingLR } = props;
  return (
    <AddMemberFormContianer $width={width} $height={height} $paddingUD={paddingUD} $paddingLR={paddingLR}>
      <EmailBox>
        palms@spring.io{' '}
        <CloseButton type="button">
          <CloseIcon />
        </CloseButton>
      </EmailBox>{' '}
      <EmailBox>
        palms@spring.io{' '}
        <CloseButton type="button">
          <CloseIcon />
        </CloseButton>
      </EmailBox>{' '}
      <EmailBox>
        palms@spring.io{' '}
        <CloseButton type="button">
          <CloseIcon />
        </CloseButton>
      </EmailBox>{' '}
      <EmailBox>
        palms@spring.io{' '}
        <CloseButton type="button">
          <CloseIcon />
        </CloseButton>
      </EmailBox>
      <EmailBox>
        palms@spring.io{' '}
        <CloseButton type="button">
          <CloseIcon />
        </CloseButton>
      </EmailBox>
      <EmailBox>
        palms@spring.io{' '}
        <CloseButton type="button">
          <CloseIcon />
        </CloseButton>
      </EmailBox>
      <EmailBox>
        palms@spring.io{' '}
        <CloseButton type="button">
          <CloseIcon />
        </CloseButton>
      </EmailBox>
      <EmailBox>
        palms@spring.io{' '}
        <CloseButton type="button">
          <CloseIcon />
        </CloseButton>
      </EmailBox>
    </AddMemberFormContianer>
  );
};

export default AddMemberForm;

const AddMemberFormContianer = styled.div<{
  $width: string;
  $height: string;
  $paddingUD: string;
  $paddingLR: string;
}>`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;

  border: 1px solid ${({ theme }) => theme.colors.grey_500};

  border-radius: 0.8rem;

  padding: ${({ $paddingUD, $paddingLR }) => `${$paddingUD}rem ${$paddingLR}rem`};
  width: ${({ $width }) => `${$width}rem`};
  /* height: ${({ $height }) => `${$height}rem`}; */

  overflow-y: scroll;
`;

const EmailBox = styled.div`
  ${({ theme }) => theme.fonts.Body1_Regular};

  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_300};

  padding: 0 0.8rem 0 1.2rem;
  height: 3.6rem;

  color: ${({ theme }) => theme.colors.grey_900};
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;

  cursor: pointer;
  padding: 0;
  width: 2rem;
`;
