interface ContentProps {
  thumbnail?: string;
  title: string;
  description: string;
  teamMember: {
    id: number;
    name: string;
    job: string;
    createdAt: string;
  };
  content: string;
  images: string;
}
