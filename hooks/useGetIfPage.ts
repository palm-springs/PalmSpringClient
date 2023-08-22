import { usePathname } from 'next/navigation';

const useGetIfPage = (): string => usePathname().split('/').slice(-3)[0] as string;

export default useGetIfPage;
