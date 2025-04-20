import { BlogMetadata } from '@/types/blog'
import fs from 'fs/promises'
import path from 'path'

// Make this a server component
export const dynamic = 'force-dynamic'

async function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<BlogMetadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof BlogMetadata] = value
  })

  return { metadata: metadata as BlogMetadata, content }
}

async function getMDXFiles(dir: string) {
  const files = await fs.readdir(dir)
  return files.filter((file) => path.extname(file) === '.mdx')
}

async function readMDXFile(filePath: string) {
  const rawContent = await fs.readFile(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

async function getMDXData(dir: string) {
  const mdxFiles = await getMDXFiles(dir)
  const postsPromises = mdxFiles.map(async (file) => {
    const { metadata, content } = await readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
  
  return Promise.all(postsPromises)
}

export async function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blogs', 'posts'))
}