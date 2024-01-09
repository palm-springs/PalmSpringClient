import { redirect } from 'next/navigation';

const page = ({ params }: { params: { team: string } }) => {
  redirect(`https://${params.team}.palms.blog/home`);
};

export default page;
