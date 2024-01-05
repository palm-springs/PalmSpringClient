import toast from 'react-hot-toast';

interface CommonToastProps {
  type: 'ERROR' | 'NORMAL';
  message: string;
  id: string;
  background?: string;
}
interface ErrorToastProps extends CommonToastProps {
  type: 'ERROR';
  duration?: number;
}

interface NormalToastProps extends CommonToastProps {
  type: 'NORMAL';
  duration?: number;
}

type ToastType = NormalToastProps | ErrorToastProps;

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

export const createToast = (props: ToastType) => {
  if (props.type === 'ERROR') {
    const { message, id, duration, background } = props;
    return () => {
      toast.error(message, {
        duration: duration,
        id,
        style: {
          ...basicToastStyle,
          background: background ?? '#343A40',
        },
      });
    };
  }

  const { id, message, background, duration } = props;

  return () => {
    toast.success(message, {
      duration,
      id,
      style: {
        ...basicToastStyle,
        background: background ?? '#343A40',
      },
    });
  };
};
