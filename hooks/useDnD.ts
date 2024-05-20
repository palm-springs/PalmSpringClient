import { Dispatch, SetStateAction, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import update from 'immutability-helper';

const useDnD = <
  I extends string,
  T extends {
    [key: string]: I;
  },
>({
  list,
  setList,
  moveItem,
  findItem,
}: {
  list: Array<T>;
  setList: Dispatch<SetStateAction<Array<T>>>;
  moveItem: (i: I, to: number) => void;
  findItem: (i: I) => { index: number };
}) => {
  let dndItem: T;

  const useDropForParent = () => useDrop(() => ({ accept: typeof dndItem }));

  const useDropForChild = (i: I) =>
    useDrop(() => ({
      accept: typeof dndItem,
      hover({ i: draggedI }: T) {
        if (draggedI !== i) {
          const { index: overIndex } = findItem(i);
          moveItem(draggedI, overIndex);
        }
      },
    }));

  const useDragForChild = (i: I, originIndex: number) =>
    useDrag(() => ({
      type: typeof dndItem,
      item: { i, originIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { i: droppedI, originIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveItem(droppedI, originIndex);
        }
      },
    }));

  // const findItem = (i: I) => {
  //   const item = list.filter((x) => `${x.i}` === i)[0] as T;
  //   return {
  //     item,
  //     index: list.indexOf(item),
  //   };
  // };

  // const moveItem = (i: I, atIndex: number) => {
  //   const { item, index } = findItem(i);

  //   setList(
  //     update(list, {
  //       $splice: [
  //         [index, 1],
  //         [atIndex, 0, item],
  //       ],
  //     }),
  //   );
  // };

  return {
    useDropForParent,
    useDropForChild,
    useDragForChild,
    // findItem,
    // moveItem,
  };
};

export default useDnD;
