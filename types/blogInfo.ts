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
  footerInfo: {
    owner: string;
    info: string;
  };
}

export interface BlogListInfo {
  id: number;
  blogUrl : string;
  articleCount : number;
}
