import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { CollapseDrawerProvider } from '@/contexts/CollapseDrawerContext';

const poppins = Poppins({
  // eslint-disable-next-line @typescript-eslint/quotes
  weight: ['400', '500', '600', '700', '800'],
  preload: false,
});

export const metadata: Metadata = {
  title: `Merry-Merry`,
  description: ``,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CollapseDrawerProvider>
        <body className={poppins.className}>{children}</body>
      </CollapseDrawerProvider>
    </html>
  );
}
