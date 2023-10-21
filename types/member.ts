import { RoleType } from '@/utils/PermissionPolicyClass';

export interface MemberProps {
  email: string;
  id: number;
  job: string;
  nickname: string;
  role: RoleType;
  thumbnail: string;
}

export interface emailData {
  emailValue: string;
  verification: boolean;
}
