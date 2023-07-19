import React, { useEffect, useState } from 'react';
import { Editor } from '@tiptap/react';
import styled from 'styled-components';

import ArticleTitle from './ui/ArticleTitle';
import ToolBox from './ui/ToolBox';

const ScrollTopToolbar = () => {
  const [isToolbarExpanded, setIsToolbarExpanded] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      setIsToolbarExpanded(currentScrollY < prevScrollY);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      <ArticleTitle />
      <TopToolbarContainer isToolbarExpanded={isToolbarExpanded}>
        <ToolBox
          editor={new Editor()}
          encodeFileToBase64={function (event: React.ChangeEvent<HTMLInputElement>, editor: Editor): void {
            throw new Error('Function not implemented.');
          }}
          setLink={function ({ editor }: { editor: Editor }): void {
            throw new Error('Function not implemented.');
          }}
        />
      </TopToolbarContainer>
    </>
  );
};

export default ScrollTopToolbar;

const TopToolbarContainer = styled.div<{ isToolbarExpanded: boolean }>`
  position: fixed;
  top: ${(props) => (props.isToolbarExpanded ? 0 : '151px')};
  left: 0;
  transition: top 0.3s;
  padding: 10px;
  width: 100%;
`;
