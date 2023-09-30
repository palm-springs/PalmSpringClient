class PermissionPolicy {
  private role: '소유자' | '관리자' | '편집자';

  constructor({ role }: { role: '소유자' | '관리자' | '편집자' }) {
    this.role = role;
  }

  get userCanAccess() {
    return this.role === '관리자';
  }
}

export default PermissionPolicy;
