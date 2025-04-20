import { getBlogPosts } from "@/app/blogs/utils"
import config from "@/common/config"
import { BlogSearch } from "@/components/blog/BlogSearch"
import { siteConfig } from "@/config/site"


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
  const allBlogs = getBlogPosts()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Our Blogs</h1>
      <BlogSearch initialBlogs={allBlogs} />
    </div>
  )
}
