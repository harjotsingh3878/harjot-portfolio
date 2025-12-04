import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harjot Singh - Full Stack Developer',
  description: 'Software Developer with 9+ years of experience building scalable, high-performance web applications using React, Node.js, TypeScript, and Redux.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
