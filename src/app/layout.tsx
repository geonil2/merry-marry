import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { CollapseDrawerProvider } from '@/contexts/CollapseDrawerContext';
import { SessionContextProvider } from '@/contexts/SessionContext';
import { ToastMessageProvider } from '@/contexts/ToastMessageContext';
import QueryProvider from '@/components/common/QueryProvider';
import ToastMessage from '@/components/common/ToastMessage';

const poppins = Poppins({
  // eslint-disable-next-line @typescript-eslint/quotes
  weight: ['400', '500', '600', '700', '800'],
  preload: false,
});

export const metadata: Metadata = {
  title: `Merry-Marry`,
  description: ``,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <QueryProvider>
          <SessionContextProvider>
            <ToastMessageProvider>
              <CollapseDrawerProvider>
                {children}
                <ToastMessage />
              </CollapseDrawerProvider>
            </ToastMessageProvider>
          </SessionContextProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
