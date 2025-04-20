import { formatDate } from "@/common/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogCardProps } from "@/types/blog"
import Link from "next/link"


export function BlogCard({ slug, metadata }: BlogCardProps) {
  return (
    <Link
      key={slug}
      href={`/blogs/${slug}`}
      className="block"
    >
      <Card className="hover:shadow-lg transition-shadow h-full">
        <CardHeader>
          <CardTitle>{metadata.title}</CardTitle>
          <CardDescription className="pt-2">
            {metadata.summary}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            {formatDate(metadata.publishedAt, false)}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
} 