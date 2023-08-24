export interface UserInfoProps {
  name: string;
  email: string;
  thumbnail: string;
  joinBlogList: Array<{
    name: string;
    url: string;
  }>;
}

export interface UserBasicInfo {
  nickname: string;
  thumbnail: string | null;
  url: string | null;
  description: string;
  job: string;
}

export interface UserBasicInfoProps {
  registerId: string;
  teamMemberId: string;
  thumbnail: string;
  nickname: string;
  url: string | null;
  description: string;
  job: string;
}
