import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import userRoleSelector from '@/recoil/selector/userRoleSelector';
import PermissionPolicyChecker from '@/utils/PermissionPolicyClass';

const usePerMissionPolicy = () => {
  // 바뀌는 userRole에 대응하기 위해 state 생성. 초기값은 가장 최하 권한인 상태로 (null or undefined일 시 에러)
  const [UserPermissionPolicyChecker, setUserPermissionPolicyChecker] = useState<PermissionPolicyChecker>(
    new PermissionPolicyChecker('EDITOR'),
  );

  const userRole = useRecoilValue(userRoleSelector);

  if (!userRole) {
    throw new Error('유저가 없습니다. 다시 로그인해주세요!');
  }

  useEffect(() => {
    setUserPermissionPolicyChecker(new PermissionPolicyChecker(userRole));
  }, [userRole]);

  return UserPermissionPolicyChecker;
};

export default usePerMissionPolicy;
