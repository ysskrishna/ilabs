import { Card, CardContent } from "@/components/ui/card"

export function HtmlCodeBlock() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="mb-4 text-lg font-semibold">1. Save the image</h3>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Save your generated OG image as <code>og.png</code> in your
          website&apos;s root directory.
        </p>

        <h3 className="mb-4 text-lg font-semibold">2. Add to HTML head</h3>
        <div className="rounded-md bg-gray-900 p-4">
          <pre className="text-sm text-white">
            <code>{`<!-- Basic OG Tags -->
<meta property="og:title" content="Your Page Title" />
<meta property="og:description" content="Your page description" />
<meta property="og:image" content="https://yourdomain.com/og.png" />
<meta property="og:url" content="https://yourdomain.com" />

<!-- Twitter/X Card Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://yourdomain.com/og.png" />

<!-- Optional but recommended -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Your Site Name" />`}</code>
          </pre>
        </div>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
          Make sure to replace <code>yourdomain.com</code> with your actual
          domain name.
        </p>
      </CardContent>
    </Card>
  )
}

export function NextjsCodeBlock() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="mb-4 text-lg font-semibold">1. Save the image</h3>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Save your generated OG image in one of these locations:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
          <li>
            <code>public/og.png</code> - for static images
          </li>
          <li>
            <code>app/og.png</code> - if you&apos;re using it as an asset in
            your app directory
          </li>
        </ul>

        <h3 className="mb-4 text-lg font-semibold">2. Configure Metadata</h3>
        <div className="rounded-md bg-gray-900 p-4">
          <pre className="text-sm text-white">
            <code>{`// app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Site Name',
  description: 'Your site description',
  openGraph: {
    title: 'Your Site Name',
    description: 'Your site description',
    images: [{
      url: '/og.png',  // Next.js automatically prepends your domain
      width: 1200,
      height: 630,
      alt: 'Site preview'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Site Name',
    description: 'Your site description',
    images: ['/og.png'],
  },
}`}</code>
          </pre>
        </div>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
          Next.js will automatically handle the image path and hosting for you.
        </p>

        <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-medium">Dynamic OG Images</h4>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            For dynamic pages, you can also generate OG images per-page:
          </p>
          <div className="mt-3 rounded-md bg-gray-900 p-4">
            <pre className="text-sm text-white">
              <code>{`// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params // Next.js 15 or later
  // const slug = params.slug // Next.js 13 or 14

  return {
    openGraph: {
      images: [{
        url: \`/blog/\${params.slug}/og.png\`,
        width: 1200,
        height: 630,
      }],
    },
    // ... other metadata
  }
}`}</code>
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
