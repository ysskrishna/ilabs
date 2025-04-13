import { siteConfig } from "@/config/site"

import config from "@/common/config"
import { BlogPosts } from "./posts"

export async function generateMetadata() {
  return {
    ...siteConfig,
    title: `Blogs | ${siteConfig.name}`,
    description: "Read Blogs.",
    openGraph: {
      ...siteConfig.openGraph,
      url: `${config?.baseUrl}/blogs`,
    },
    twitter: {
      ...siteConfig.twitter,
      site: `${config?.baseUrl}/blogs`,
    },
  }
}

export default function Page() {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">Blogs</h2>
      <BlogPosts />
    </section>
  )
}
