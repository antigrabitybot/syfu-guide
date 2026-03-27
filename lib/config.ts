export const siteConfig = {
  name: 'SyFu - GameFi Payment Data Platform',
  description: 'SyFuはゲーム内の取引データをブロックチェーン上で管理するGameFiプラットフォーム。攻略ガイド、リファコード、公式ドキュメント完備。',
  url: 'https://syfu-guide.vercel.app',
  image: 'https://syfu.io/og-image.png',
  type: 'website',
  keywords: [
    'SyFu',
    'GameFi',
    'ゲーム',
    '攻略',
    'リファコード',
    'ブロックチェーン',
    'Web3',
    'EVT',
    'ゲーム内取引',
    'Excavation Token',
  ],
};

export const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  applicationCategory: 'GameApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'JPY',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '250',
  },
};

export const openGraphConfig = {
  title: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  siteName: 'SyFu Guide',
  images: [
    {
      url: siteConfig.image,
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    },
  ],
  type: 'website',
  locale: 'ja_JP',
};
