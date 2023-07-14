import { usePathname } from 'next/navigation';

const useGetLastPathName = (): dashBoardPageType => usePathname().split('/').pop() as dashBoardPageType;

export default useGetLastPathName;
