import { useGetAccessToken } from '@/hooks/auth';
import { getAccessTokenProps } from '@/types/auth';

const RequestAccessToken = (props: getAccessTokenProps) => {
  const { clientId, clientSecret, code } = props;

  const data = useGetAccessToken({ clientId, clientSecret, code });
};

export default RequestAccessToken;
