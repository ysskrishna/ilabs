import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import productsData from "@/json/products.json";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export function ProductsList() {
  const featuredProducts = productsData.filter(product => product.featured)

  return (
    <section className="mb-16 text-start">
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
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
