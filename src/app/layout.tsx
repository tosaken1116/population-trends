import type { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import './globals.css';
import {
  SERVICE_CREATOR,
  SERVICE_DESCRIPTION,
  SERVICE_TITLE,
  SERVICE_TWITTER,
} from '@/constants/meta';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(process.env['VERCEL_URL'] || 'http://localhost:3000'),
  title: SERVICE_TITLE,
  description: SERVICE_DESCRIPTION,
  openGraph: {
    title: SERVICE_TITLE,
    description: SERVICE_DESCRIPTION,
    siteName: SERVICE_TITLE,
    locale: 'ja_JP',
    type: 'website',
    images: '/og-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: SERVICE_TITLE,
    description: SERVICE_DESCRIPTION,
    site: SERVICE_TWITTER,
    creator: SERVICE_CREATOR,
    images: '/og-image.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactNode {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
