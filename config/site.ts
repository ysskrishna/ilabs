import config from "@/common/config";
import { SiteConfig } from "@/types/siteConfig";


const baseSiteConfig = {
  name: config?.productName,
  title: config?.productName,
  description:
    "Create beautiful OG images, Twitter/X Header Images & more for free, in simple clicks.",
  url: config?.baseUrl,
  metadataBase: new URL(config?.baseUrl),
  keywords: [],
  authors: [
    {
      name: config?.author?.name,
      url: config?.author?.url,
      linkedin: config?.author?.linkedin,
      github: config?.author?.github,
    }
  ],
  creator: config?.author?.name,
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en-US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    site: baseSiteConfig.url,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.webp`],
    creator: baseSiteConfig.creator,
  },
}
