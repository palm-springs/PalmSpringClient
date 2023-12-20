import { dashBoardPageType } from '@/types/dashboard';

import PermissionPolicyChecker from './PermissionPolicyClass';

const checkRenderDashboardPermissionButton = (
  pathName: dashBoardPageType | 'dashboard',
  permissionPolicyChecker: PermissionPolicyChecker,
) => {
  const {
    createCategory,
    updateCategory,
    deleteCategory,
    createNavigation,
    updateNavigation,
    deleteNavigation,
    inviteNewMember,
    deleteMember,
  } = permissionPolicyChecker;

  const canCreateCategory = pathName === 'category' ? createCategory : true;

  const canUpdateCategory = pathName === 'category' ? updateCategory : true;

  const canDeleteCategory = pathName === 'category' ? deleteCategory : true;

  const canCreateNavigation = pathName === 'nav' ? createNavigation : true;

  const canUpdateNavigation = pathName === 'nav' ? updateNavigation : true;

  const canDeleteNavigation = pathName === 'nav' ? deleteNavigation : true;

  const canInviteMember = pathName === 'member' ? inviteNewMember : true;

  const canDeleteMember = pathName === 'member' ? deleteMember : true;

  const renderHeaderButton = canCreateCategory && canCreateNavigation && canInviteMember;

  const renderPopOverButton =
    canUpdateCategory && canDeleteCategory && canUpdateNavigation && canDeleteNavigation && canDeleteMember;

  return { renderHeaderButton, renderPopOverButton };
};

export default checkRenderDashboardPermissionButton;
