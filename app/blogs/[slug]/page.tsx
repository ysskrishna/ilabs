import { notFound } from "next/navigation"

import { siteConfig } from "@/config/site"

import { CustomMDX } from "@/app/blogs/mdx"
import { getBlogPosts } from "@/app/blogs/utils"
import config from "@/common/config"
import { formatDate } from "@/common/utils"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  let posts = await getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const posts = await getBlogPosts()
  const post = posts.find((post) => post.slug === slug)
  return {
    ...siteConfig,
    title: `${post?.metadata.title} | ${siteConfig.name}`,
    description: post?.metadata.summary,
    openGraph: {
      ...siteConfig.openGraph,
      url: `${config?.baseUrl}/blogs/${post?.slug}`,
    },
    twitter: {
      ...siteConfig.twitter,
      url: `${config?.baseUrl}/blogs/${post?.slug}`,
    },
  }
}

export default async function Blog({ params }: { params: Params }) {
  const { slug } = await params
  const posts = await getBlogPosts()
  let post = posts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <h1 className="title text-2xl font-semibold tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="mb-8 mt-2 flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose prose-vercel dark:prose-invert w-full max-w-none">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
