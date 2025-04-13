import config from "@/common/config"
import { siteConfig } from "@/config/site"
import { Metadata } from "next"

export const metadata: Metadata = {
  ...siteConfig,
  title: `Products | ${siteConfig.name}`,
  description: "Explore our collection of innovative products and tools.",
  openGraph: {
    ...siteConfig.openGraph,
    url: `${config?.baseUrl}/products`,
  },
  twitter: {
    ...siteConfig.twitter,
    site: `${config?.baseUrl}/products`,
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 