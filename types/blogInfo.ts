export interface BlogBasicInfoType {
  myBlog: {
    blogUrl: string;
    blogName: string;
  };
}

export interface createBlogData {
  url: string;
  name: string;
  thumbnail?: string;
  logo?: string;
  description?: string;
}
