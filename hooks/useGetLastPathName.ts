import { usePathname } from 'next/navigation';

const useGetLastPathName = () => usePathname().split('/').pop();

export default useGetLastPathName;
