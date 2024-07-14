import { usePathname } from 'next/navigation';

import { dashBoardPageType } from '@/types/dashboard';

const useGetLastPathName = (): dashBoardPageType | 'dashboard' => {
  const path = usePathname();
  if (path.includes('statistics')) return 'statistics';
  return path.split('/').pop() as dashBoardPageType;
};
export default useGetLastPathName;
