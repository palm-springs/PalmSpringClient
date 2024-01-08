import { useRecoilValue } from 'recoil';

import userState from '@/recoil/atom/user';
import userRoleSelector from '@/recoil/selector/userRoleSelector';
import PermissionPolicyChecker from '@/utils/PermissionPolicyClass';

const usePerMissionPolicy = () => {
  const userValue = useRecoilValue(userState);

  if (!userValue?.currentUserRole) {
    throw new Error('유저가 없습니다. 다시 로그인해주세요!');
  }

  const UserPermissionPolicyChecker = PermissionPolicyChecker.getInstance(userValue.currentUserRole);

  return UserPermissionPolicyChecker;
};

export default usePerMissionPolicy;
