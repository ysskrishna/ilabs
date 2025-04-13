import config from "@/common/config"
import { Input } from "@/components/ui/input"
import { siteConfig } from "@/config/site"
import { Search } from "lucide-react"
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
    <div>
      <h1 className="text-4xl font-bold mb-8">Our Blogs</h1>
      
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search blogs..."
          className="pl-12 h-14 text-lg"
        />
      </div>

      <BlogPosts />
    </div>
  )
}
