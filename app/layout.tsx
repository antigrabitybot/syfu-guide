import type { Metadata } from 'next';
import { siteConfig, jsonLdSchema, openGraphConfig } from '@/lib/config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: '%s | SyFu Guide',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'SyFu Community' }],
  creator: 'SyFu Guide Team',
  formatDetection: {
    email: true,
    telephone: true,
    address: false,
  },
  openGraph: openGraphConfig,
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.image],
    creator: '@syfuofficial',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_ID',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0F172A" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />

        {/* Google Analytics（オプション） */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className="bg-dark-bg text-slate-100">
        {/* グリッド背景 */}
        <div className="fixed inset-0 grid-bg pointer-events-none opacity-5 z-0" />

        {/* メインコンテンツ */}
        <div className="relative z-10">
          {children}
        </div>

        {/* フッター固定背景エフェクト */}
        <div className="fixed bottom-0 left-0 w-full h-96 bg-gradient-to-t from-neon-purple/5 via-transparent to-transparent pointer-events-none z-0" />
      </body>
    </html>
  );
}
