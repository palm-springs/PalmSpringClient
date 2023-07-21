export interface PageData {
  title: string;
  content: string;
  images: string[] | null;
  thumbnail: string;
}

export interface CreatePageProps {
  title: string;
  content: string;
  images: string[] | null;
  thumbnail: string;
  pageUrl: string;
}
