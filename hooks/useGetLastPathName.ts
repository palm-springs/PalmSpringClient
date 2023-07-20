import { usePathname } from 'next/navigation';

import { dashBoardPageType } from '@/types/dashboard';

const useGetLastPathName = (): dashBoardPageType | 'dashboard' => usePathname().split('/').pop() as dashBoardPageType;

export default useGetLastPathName;
