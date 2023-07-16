import { usePathname } from 'next/navigation';

import { dashBoardPageType } from '@/types/dashboard';

const useGetLastPathName = (): dashBoardPageType => usePathname().split('/').pop() as dashBoardPageType;

export default useGetLastPathName;
