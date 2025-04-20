export interface BlogMetadata {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

export interface BlogCardProps {
  slug: string
  metadata: BlogMetadata
}