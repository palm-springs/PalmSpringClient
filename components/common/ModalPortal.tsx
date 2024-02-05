import { ReactNode } from 'react';
import ReactDom, { unstable_batchedUpdates } from 'react-dom';

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  const el = document.getElementById('modal-root') as HTMLElement;

  return ReactDom.createPortal(children as any, el);
};

export default ModalPortal;
