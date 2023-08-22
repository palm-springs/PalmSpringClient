import { usePathname } from 'next/navigation';

const useGetIfContentPage = (): string => usePathname().split('/').slice(-4)[0] as string;

export default useGetIfContentPage;
