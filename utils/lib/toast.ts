import toast from 'react-hot-toast';

export const createToast = (message: string, errorType: string) => {
  return () => {
    toast.error(message, {
      duration: 3000,
      id: `error on ${errorType}`,
      style: {
        padding: '1.6rem 2rem',
        borderRadius: '3.2rem',
        background: '#343A40',
        color: '#fff',
        fontSize: '1.4rem',
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: '-0.028rem',
      },
    });
  };
};
