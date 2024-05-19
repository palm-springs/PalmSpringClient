import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { styled } from 'styled-components';

import { test } from '../BlogList';

interface IndivBlogProps {
  isCurrentBlog: boolean;
  innerText: string;
  blogUrl: string;
  handleChange: () => void;
  moveBlog: (id: string, to: number) => void;
  findBlog: (id: string) => { index: number };
}

const IndivBlog = (props: IndivBlogProps) => {
  const { isCurrentBlog, innerText, handleChange, blogUrl, moveBlog, findBlog } = props;

  const originIndex = findBlog(blogUrl).index;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeof test,
    item: { blogUrl, originIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const { blogUrl: droppedUrl, originIndex } = item;
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveBlog(droppedUrl, originIndex);
      }
    },
  }));

  const [, drop] = useDrop(() => ({
    accept: typeof test,
    hover({ blogUrl: draggedUrl }: typeof test) {
      if (draggedUrl !== blogUrl) {
        const { index: overIndex } = findBlog(blogUrl);
        moveBlog(draggedUrl, overIndex);
      }
    },
  }), [findBlog, moveBlog]);

  const opacity = isDragging ? 0 : 1;

  return (
    <IndivBlogUI ref={(node) => drag(drop(node))} $isCurrentBlog={isCurrentBlog} style={{ opacity }}>
      {innerText}
    </IndivBlogUI>
  );
};

export default IndivBlog;

const IndivBlogUI = styled.div<{ $isCurrentBlog: boolean }>`
  ${({ theme, $isCurrentBlog }) => ($isCurrentBlog ? theme.fonts.Body3_Semibold : theme.fonts.Body3_Regular)};
  transition: 0.3s ease-out;
  border-radius: 0.8rem;
  cursor: pointer;
  padding: 1.2rem 1.6rem 1.2rem 1.2rem;
  width: 100%;

  color: ${({ theme }) => theme.colors.grey_900};
  &:hover {
    background: ${({ theme }) => theme.colors.grey_100};
  }
`;
