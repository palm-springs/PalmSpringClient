export interface HeaderProps {
  logo: string | null;
  blogName: string;
  navList: {
    id: number;
    name: string;
    navUrl: string;
    isPage: boolean;
  }[];
}

export interface subscribeData {
  email: string;
  blogUrl: string;
}
