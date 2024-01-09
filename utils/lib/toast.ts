import toast from 'react-hot-toast';

interface ToastProps {
  type: 'ERROR' | 'NORMAL';
  message: string;
  id: string;
  background?: string;
  duration?: number;
}

const basicToastStyle = {
  padding: '1.6rem 2rem',
  borderRadius: '3.2rem',
  color: '#fff',
  fontSize: '1.4rem',
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  fontWeight: '400',
  letterSpacing: '-0.028rem',
};

const toastConfig = ({ duration, id, background }: Omit<ToastProps, 'type' | 'message'>) => ({
  duration,
  id,
  style: {
    ...basicToastStyle,
    background: background ?? '#343A40',
  },
});

export const createToast = (props: ToastProps) => {
  const { type, message, ...rest } = props;

  switch (type) {
    case 'ERROR':
      return () => {
        toast.error(message, toastConfig(rest));
      };
    case 'NORMAL':
      return () => {
        toast.success(message, toastConfig(rest));
      };
  }
};
