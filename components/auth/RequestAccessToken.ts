import { useGetAccessToken } from '@/hooks/auth';
import { getAccessTokenProps } from '@/types/auth';

const RequestAccessToken = (props: getAccessTokenProps) => {
  const data = useGetAccessToken(props);
};

export default RequestAccessToken;
