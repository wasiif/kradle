import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kradle',
  description: 'A calm reading space for long-form work.',
  icons: {
    icon: '/icons/favicon.svg',
    apple: '/icons/web-app-manifest-192x192.png',
  },
  manifest: '/icons/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
