import { usePathname } from 'next/navigation';

const useGetCategory = (): string => {
  const category = usePathname().split('/').pop() as string;
  if (category === '') return 'home';
  return category;
};

export default useGetCategory;
