'use client'

import { BlogCard } from "@/components/blogs/BlogCard"
import { Input } from "@/components/ui/input"
import { BlogCardProps } from "@/types/blog"
import { Search } from "lucide-react"
import { useMemo, useState } from "react"

interface BlogSearchProps {
  initialBlogs: BlogCardProps[]
}

export function BlogSearch({ initialBlogs }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredBlogs = useMemo(() => {
    if (!searchQuery) return initialBlogs

    const query = searchQuery.toLowerCase()
    return initialBlogs.filter((post) => {
      const title = post.metadata.title.toLowerCase()
      const summary = post.metadata.summary.toLowerCase()
      return title.includes(query) || summary.includes(query)
    })
  }, [initialBlogs, searchQuery])

  return (
    <div>
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search blogs..."
          className="pl-12 h-14 text-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1
            }
            return 1
          })
          .map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
      </div>
    </div>
  )
} 