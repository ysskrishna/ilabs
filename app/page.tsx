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
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Products</h1>
        <p className="text-xl text-muted-foreground">
          Explore our collection of free tools and resources
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>OG Image Generator</CardTitle>
            <CardDescription>
              Create beautiful Open Graph images, Twitter/X headers, and blog covers in just a few clicks.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Generate high-quality social media images with our free tool. No signup required!
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/products/og-image-generator">
                Try OG Image Generator
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle>All Products</CardTitle>
            <CardDescription>
              Explore our complete collection of free tools and resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Browse our full catalog of free products including boilerplates, templates, and utility tools.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/products">
                View All Products
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
