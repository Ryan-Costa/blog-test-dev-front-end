import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ToastComponent from '@/components/common/ToastComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog Post',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <ToastComponent />
          {children}
        </>
      </body>
    </html>
  );
}
