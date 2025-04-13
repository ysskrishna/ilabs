"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import productsData from "@/data/products.json"
import { Search } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useMemo, useState } from "react"

export default function ProductsPage() {
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return productsData

    const query = searchQuery.toLowerCase()
    return productsData.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.features.some((feature) => feature.toLowerCase().includes(query))
      )
    })
  }, [searchQuery])

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search products by name, category, or features..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-14 text-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Link 
            key={product.id} 
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription className="pt-2">{product.description}</CardDescription>
                  </div>
                  {product.featured && (
                    <Badge variant="default" className="bg-primary">Featured</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  {product.productHuntId && (
                    <div className="pt-4">
                      <div 
                        onClick={() => window.open(`${product.url}?embed=true&utm_source=badge-featured&utm_medium=badge`, '_blank', 'noopener,noreferrer')}
                        className="cursor-pointer"
                      >
                        <img 
                          src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${product.productHuntId}&theme=${theme === 'dark' ? 'dark' : 'neutral'}`} 
                          alt={`${product.name} | Product Hunt`} 
                          style={{ width: '250px', height: '54px' }} 
                          width="250" 
                          height="54" 
                        />
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
} 