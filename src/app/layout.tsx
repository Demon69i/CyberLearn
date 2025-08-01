import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/common/Header';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'CyberLearn - Master Ethical Hacking',
  description: 'Explore and learn Cyber Security and Ethical Hacking with our expert-led courses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
              {children}
            </div>
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
