import { usePathname } from 'next/navigation';

const useGetIfContentPage = (): string => usePathname().split('/').slice(-2)[0] as string;

export default useGetIfContentPage;
