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
  thumbnail: string;
  description: string;
  job: string;
}
