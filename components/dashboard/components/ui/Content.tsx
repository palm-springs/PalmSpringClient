import React from 'react';
import { styled } from 'styled-components';

import useGetLastPathName from '@/hooks/useGetLastPathName';

interface ContentProps {
  onTitleClick?: React.MouseEventHandler<HTMLButtonElement>;
  content: string;
}

const Content = (props: ContentProps) => {
  const { onTitleClick, content } = props;

  const pathName = useGetLastPathName();

  return (
    <ContentUI $isPathNavOrCategory={pathName === 'nav' || pathName === 'category'} onClick={onTitleClick}>
      {content}
    </ContentUI>
  );
};

export default Content;

const ContentUI = styled.button<{ $isPathNavOrCategory: boolean }>`
  margin-right: 2rem;
  ${({ theme }) => theme.fonts.Body3_Semibold};
  width: ${({ $isPathNavOrCategory }) => ($isPathNavOrCategory ? '9.2rem' : '30vw')};
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_900};
`;
