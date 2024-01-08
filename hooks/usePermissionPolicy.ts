import { useRecoilValue } from 'recoil';

import userRoleSelector from '@/recoil/selector/userRoleSelector';
import PermissionPolicyChecker from '@/utils/PermissionPolicyClass';

const usePerMissionPolicy = () => {
  const userRole = useRecoilValue(userRoleSelector);

  if (!userRole) {
    throw new Error('유저가 없습니다. 다시 로그인해주세요!');
  }

  const UserPermissionPolicyChecker = PermissionPolicyChecker.getInstance(userRole);

  return UserPermissionPolicyChecker;
};

export default usePerMissionPolicy;
