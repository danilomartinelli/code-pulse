import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { ConnectionStoreProvider } from "@/providers/connection-store-provider";

import "@uploadcare/file-uploader/web/uc-file-uploader-regular.min.css";
import "./globals.css";
import { env } from "@/lib/env";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Pulse",
  description: "Automate Your Worke  With Code Pulse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      afterSignOutUrl="/"
    >
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ConnectionStoreProvider>{children}</ConnectionStoreProvider>
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
