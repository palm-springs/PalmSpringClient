export interface PageData {
  title: string;
  content: string;
  images: string[];
  thumbnail: string;
}

export interface CreatePageProps {
  title: string;
  content: string;
  images: string[];
  thumbnail: string;
  pageUrl: string;
}
