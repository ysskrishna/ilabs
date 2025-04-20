"use client"
import { ProductCard } from "@/components/product/ProductCard"
import productsData from "@/json/products.json"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  const featuredProducts = productsData.filter(product => product.featured)

  return (
    <main className="mx-auto py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Build Better, Faster with iLabs</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover a curated collection of powerful development tools, templates, and resources. Whether you're a developer, marketer, or content creator, our free tools are designed to supercharge your workflow and bring your ideas to life.
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Button asChild size="lg">
            <Link href="/products">
              Explore All Tools
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/creator">Meet the Creator</Link>
          </Button>
        </div>
      </header>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Complete Tool Collection</CardTitle>
              <CardDescription>
                Explore our full suite of free development tools and resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mt-4 space-y-2">
                <li>✓ Professional development templates</li>
                <li>✓ Time-saving utility tools</li>
                <li>✓ Ready-to-use code snippets</li>
                <li>✓ Comprehensive resource libraries</li>
                <li>✓ Regular updates and new features</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/products" aria-label="Browse all our products and tools">
                  View All Products
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
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
