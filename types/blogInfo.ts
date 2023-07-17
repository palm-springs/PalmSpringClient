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

export interface createBlogImgFile {
  logo: File | null;
  thumbnail: File | null;
}
