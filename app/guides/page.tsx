import { siteConfig } from "@/config/site"

import config from "@/common/config"
import { BlogPosts } from "./posts"

export async function generateMetadata() {
  return {
    ...siteConfig,
    title: `Guides | ${siteConfig.name}`,
    description: "Read OG Image Guides.",
    openGraph: {
      ...siteConfig.openGraph,
      url: `${config?.baseUrl}/guides`,
    },
    twitter: {
      ...siteConfig.twitter,
      site: `${config?.baseUrl}/guides`,
    },
  }
}

export default function Page() {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">Guides</h2>
      <BlogPosts />
    </section>
  )
}
