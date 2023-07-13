import { usePathname } from 'next/navigation';

const useGetCategory = (): string => usePathname().split('/').pop() as string;

export default useGetCategory;
