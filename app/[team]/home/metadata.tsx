// import { Metadata, ResolvingMetadata } from 'next';

// type Props = {
//   params: { team: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
//   // read route params
//   const id = params.team;

//   // fetch data
//   //   const product = await fetch(`https://.../${id}`).then((res) => res.json());
//   const product = await
//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   };
// }
