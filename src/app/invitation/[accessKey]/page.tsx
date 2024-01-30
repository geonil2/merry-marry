import type { Metadata, ResolvingMetadata } from 'next';

import getMetadata from '@/helper/getMetadata';

type Props = {
  params: { accessKey: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { accessKey } = params;

  // fetch data
  const product = await fetch(`https://.../${accessKey}`).then((res) =>
    res.json(),
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: [`/some-specific-page-image.jpg`, ...previousImages],
    },
  };
}

const metadata = getMetadata({ title: `` });

export default function Invitation({ params }: Props) {
  return <div>{params.accessKey}</div>;
}
