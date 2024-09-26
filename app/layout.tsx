import type { Metadata } from 'next';
import { Titillium_Web } from 'next/font/google';

import './globals.css';

const TitilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['700'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Joan Skënderi | Portfolio',
  description:
    'I am Joan Skënderi, a software developer focused in JavaScript. Discover skills, experiences, contact information and more.',
  keywords: [
    'Joan Skënderi',
    'Joan Skenderi',
    'joan skenderi',
    'joanskenderi',
    'Software Developer',
    'Full Stack Developer',
    'JavaScript Developer',
  ],
  authors: {
    name: 'Joan Skënderi',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${TitilliumWeb.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
