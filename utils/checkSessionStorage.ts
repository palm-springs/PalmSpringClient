export const checkSessionStorage = () => {
  return typeof window !== 'undefined' ? window.sessionStorage : undefined;
};
