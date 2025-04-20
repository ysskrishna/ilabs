import { BlogsList } from "@/components/home/BlogsList"
import { ProductsList } from "@/components/home/ProductsList"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {

  return (
    <main className="mx-auto py-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Build Better, Faster with iLabs</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover a curated collection of powerful development tools, templates, and resources. Whether you're a developer, marketer, or content creator, our free tools are designed to supercharge your workflow and bring your ideas to life.
        </p>
        <div className="flex justify-center gap-2 mt-4 mb-8 sm:flex-row flex-col">
          <Button asChild size="lg">
            <Link href="/products">
              Explore All Tools  <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/creator">Meet the Creator</Link>
          </Button>
        </div>
        <ProductsList />
      </header>

    
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-4">From Our Blog</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto ">
          Tips, tutorials, and insights to help you make the most of our tools.
        </p>
        <Button asChild size="lg" className="mt-2 mb-8">
          <Link href="/blogs">
            Explore All Blogs  <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <BlogsList />
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Why Choose iLabs?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-medium mb-2">100% Free & Open</h3>
            <p className="text-muted-foreground">No hidden costs, no signup required. All tools are free to use and open source.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Built by Developers</h3>
            <p className="text-muted-foreground">Tools created by developers, for developers. We understand your needs.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Always Evolving</h3>
            <p className="text-muted-foreground">We continuously improve and add new features based on community feedback.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
