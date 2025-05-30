import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Providers } from "./providers";
import { TempoInit } from "./tempo-init";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "vsql. - AI SQL Assistant",
  description: "Convert voice to SQL effortlessly.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
        media: '(prefers-color-scheme: dark)'
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
        media: '(prefers-color-scheme: light)'
      }
    ],
    apple: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
        sizes: 'any'
      }
    ],
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <Script src="https://api.tempo.new/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <TempoInit />
      </body>
    </html>
  );
}
