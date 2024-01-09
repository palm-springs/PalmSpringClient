export type RoleType = 'OWNER' | 'MANAGER' | 'EDITOR';

class PermissionPolicyChecker {
  private static instance: PermissionPolicyChecker;

  // 싱글톤 패턴 적용
  // SPA에서 싱글톤 적용 시 role에 따른 갱신 불가.
  static getInstance(role: RoleType) {
    if (!PermissionPolicyChecker.instance) {
      PermissionPolicyChecker.instance = new PermissionPolicyChecker(role);
    }
    return PermissionPolicyChecker.instance;
  }

  /**
   * 권한은 크게 두 종류로 나눌 수 있습니다.
   * 1. 해당 권한인 경우에만 가능한 것
   * 2. 해당 권한인 경우에만 불가능한 것
   *
   * 이를 위해 메서드를 두 가지로 분리했습니다.
   */
  private readonly _role: RoleType;

  constructor(role: RoleType) {
    this._role = role;
  }

  // 이 권한을 가진 경우만 가능합니다.
  private eligible = (roles: RoleType[]) => {
    return roles.includes(this._role);
  };

  // 이 권한을 가진 경우만 불가능합니다.
  private ineligible = (roles: RoleType[]) => {
    return !roles.includes(this._role);
  };

  // 업로드된 글 삭제
  get deleteUploadedContent() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 임시저장한 글 삭제
  get deleteNonUploadedContent() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 팜스프링 탈퇴하기
  get withdrawPalmSpring() {
    return this.ineligible(['OWNER']);
  }

  // 블로그 나가기(팀 퇴사하기)
  get resignCurrentTeam() {
    return this.ineligible(['OWNER']);
  }

  // 블로그 삭제하기
  get deleteBlog() {
    return this.eligible(['OWNER']);
  }

  // 페이지 생성하기
  get createPage() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 페이지 수정하기
  get updatePage() {
    return this.eligible(['OWNER', 'MANAGER']);
  }
  // 페이지 삭제하기
  get deletePage() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 카테고리 생성하기
  get createCategory() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 카테고리 수정하기
  get updateCategory() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 카테고리 삭제하기
  get deleteCategory() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 네비게이션 생성하기
  get createNavigation() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 네비게이션 수정하기
  get updateNavigation() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 네비게이션 삭제하기
  get deleteNavigation() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 팀원 삭제하기
  get deleteMember() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 팀원 초대하기
  get inviteNewMember() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 편집자 추방하기
  get expelEditor() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 관리자 추방하기
  get expelManager() {
    return this.eligible(['OWNER']);
  }

  // 소유자 권한 위임하기
  get appointOwner() {
    return this.eligible(['OWNER']);
  }

  // 관리자 임명하기
  get appointManager() {
    return this.eligible(['OWNER']);
  }

  // 편집자 임명하기
  get appointEditor() {
    return this.eligible(['OWNER', 'MANAGER']);
  }

  // 블로그 정보 수정하기
  get modifyBlogInfo() {
    return this.eligible(['OWNER', 'MANAGER']);
  }
}

export default PermissionPolicyChecker;
