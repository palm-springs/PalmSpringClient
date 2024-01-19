import { redirect } from 'next/navigation';

const page = ({ params }: { params: { team: string } }) => {
  redirect(`https://palms.blog/${params.team}/home`);
};

export default page;
