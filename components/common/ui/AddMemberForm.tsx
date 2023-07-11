'use client';
import styled from 'styled-components';

import AddMemberInput from './AddMemberInput';

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
      <AddMemberInput />
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
  border: 1px solid ${({ theme }) => theme.colors.grey_500};
  border-radius: 0.8rem;

  padding: ${({ $paddingUD, $paddingLR }) => `${$paddingUD}rem ${$paddingLR}rem`};
  width: ${({ $width }) => `${$width}rem`};
  height: ${({ $height }) => `${$height}rem`};

  overflow-y: auto;
`;
