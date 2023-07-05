import LoginLanding from '@/components/auth/LoginLanding';

const page = () => {
  return (
    <LoginLanding
      clientId={process.env.GOOGLE_CLIENT_ID as string}
      clientSecret={process.env.GOOGLE_CLIENT_SECRET as string}
    />
  );
};

export default page;
