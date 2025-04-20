import { getBlogPosts } from "@/app/blogs/utils"
import { BlogCard } from "@/components/blogs/BlogCard"

export async function BlogsList() {
  const allBlogs = await getBlogPosts()
  const latestBlogs = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
      {latestBlogs.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  )
}