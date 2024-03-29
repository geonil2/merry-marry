import { Metadata } from 'next';

export default function getMetadata({ title, ...rest }: Metadata): Metadata {
  return {
    title: title || `Merry-Marry`,
    ...rest,
  };
}
