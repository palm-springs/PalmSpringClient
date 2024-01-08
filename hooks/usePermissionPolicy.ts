import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useRecoilState, useRecoilValue } from 'recoil';

import userState from '@/recoil/atom/user';
import userRoleSelector from '@/recoil/selector/userRoleSelector';
import PermissionPolicyChecker from '@/utils/PermissionPolicyClass';

const usePerMissionPolicy = () => {
  const { team } = useParams();
  const [userValue, setUserValue] = useRecoilState(userState);

  useEffect(() => {
    const currentUserBlog = userValue?.joinBlogList.find(({ blogUrl }) => blogUrl === team);
    if (userValue && currentUserBlog) {
      setUserValue({
        ...userValue,
        currentUserRole: currentUserBlog.role,
      });
    }
  }, [team]);

  // const userValue = useRecoilValue(userState);

  console.log(userValue, 'userPermission');

  if (!userValue?.currentUserRole) {
    throw new Error('유저가 없습니다. 다시 로그인해주세요!');
  }

  const UserPermissionPolicyChecker = PermissionPolicyChecker.getInstance(userValue.currentUserRole);

  return UserPermissionPolicyChecker;
};

export default usePerMissionPolicy;
