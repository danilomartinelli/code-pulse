import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

import '@uploadcare/file-uploader/web/uc-file-uploader-regular.min.css';
import './globals.css';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Code Pulse',
  description: 'Automate Your Worke  With Code Pulse.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
