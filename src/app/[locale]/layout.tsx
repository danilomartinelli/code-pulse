import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';
import { ConnectionStoreProvider } from '@/providers/connection-store-provider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import TrpcProvider from '@/providers/trpc-provider';
import { cookies } from 'next/headers';
import { env } from '@/lib/config/env';
import '@uploadcare/file-uploader/web/uc-file-uploader-regular.min.css';
import './globals.css';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Code Pulse',
  description: 'Automate Your Worke  With Code Pulse.',
};

async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <ClerkProvider
      publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      afterSignOutUrl="/"
    >
      <html lang={locale}>
        <body className={font.className}>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <TrpcProvider cookies={cookies().toString()}>
                <ConnectionStoreProvider>{children}</ConnectionStoreProvider>
              </TrpcProvider>
              <Analytics />
              <Toaster />
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

export default RootLayout;
