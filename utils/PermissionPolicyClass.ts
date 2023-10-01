export type RoleType = '소유자' | '관리자' | '편집자';

// <T extends boolean, S extends ((roles: RoleType[]) => T)>

class PermissionPolicyChecker {
  private static instance: PermissionPolicyChecker;
  /**
   * 권한은 크게 두 종류로 나눌 수 있습니다.
   * 1. 해당 권한인 경우에만 가능한 것
   * 2. 해당 권한인 경우에만 불가능한 것
   *
   * 이를 위해 메서드를 두 가지로 분리했습니다.
   */
  private _role: RoleType;

  constructor(role: RoleType) {
    this._role = role;
  }

  // 이 권한을 가진 경우만 가능합니다.
  private eligible(roles: RoleType[]) {
    return roles.includes(this._role);
  }

  // 이 권한을 가진 경우만 불가능합니다.
  private ineligible(roles: RoleType[]) {
    return !roles.includes(this._role);
  }

  // 업로드된 글 삭제
  get deleteUploadedContent() {
    return this.eligible(['소유자', '관리자']);
  }

  // 임시저장한 글 삭제
  get deleteNonUploadedContent() {
    return this.eligible(['소유자', '관리자']);
  }

  // 팜스프링 탈퇴하기
  get withdrawPalmSpring() {
    return this.ineligible(['소유자']);
  }

  // 블로그 나가기(팀 퇴사하기)
  get resignCurrentTeam() {
    return this.ineligible(['소유자']);
  }

  // 블로그 삭제하기
  get deleteBlog() {
    return this.eligible(['소유자']);
  }

  // 팀원 초대하기
  get inviteNewMember() {
    return this.eligible(['소유자', '관리자']);
  }

  // 편집자 추방하기
  get expelEditor() {
    return this.eligible(['소유자', '관리자']);
  }

  // 관리자 추방하기
  get expelManager() {
    return this.eligible(['소유자']);
  }

  // 관리자 임명하기
  get appointManager() {
    return this.eligible(['소유자']);
  }

  // 싱글톤 패턴 적용
  static getInstance(role: RoleType) {
    if (!PermissionPolicyChecker.instance) {
      PermissionPolicyChecker.instance = new PermissionPolicyChecker(role);
    }
    return PermissionPolicyChecker.instance;
  }
}

export default PermissionPolicyChecker;
