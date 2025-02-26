import type { Metadata } from 'next';
import { WEBSITE_HOST_URL } from '@/lib/constants';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});

const meta = {
  title: "kinzoku's blog",
  description:
    "Hey! I'm a 16y/o self-taught amateur developer in the US. I made this site to write about my experiences and things I find interesting.",
};

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | kinzokudev',
  },
  metadataBase:
    process.env.NODE_ENV === 'production'
      ? new URL(WEBSITE_HOST_URL)
      : new URL('http://localhost:3000'),
  description: meta.description,
  creator: 'kinzoku',
  keywords: [
    'Blog',
    'Developer',
    'Software Engineer',
    'Writing',
    'Frontend',
    'Engineering',
    'Typescript',
    'React',
    'Nextjs',
    'Python',
    'Server',
    'Docker',
    'Next',
  ],
  authors: [{ name: 'kinzoku', url: 'https://github.com/kinzokudev' }],
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
    //images: [
    //  {
    //    url: meta.image,
    //  },
    //],
  },
  themeColor: '#09090B',
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.className}
    >
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body className="flex min-h-screen flex-col"></body>
    </html>
  );
}
