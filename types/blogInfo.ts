export interface BlogBasicInfoType {
  myBlog: {
    blogUrl: string;
    blogName: string;
  };
}

export interface createBlogData {
  url: string;
  name: string;
  thumbnail: string | null;
  logo: string | null;
  description: string | null;
}

export interface BlogListInfo {
  id: number;
  blogUrl : string;
  articleCount : number;
}
