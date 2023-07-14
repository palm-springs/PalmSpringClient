import { useGetAccessToken } from '@/hooks/auth';

const RequestAccessToken = (props: getAccessTokenProps) => {
  const data = useGetAccessToken(props);
};

export default RequestAccessToken;
