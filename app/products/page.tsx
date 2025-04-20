"use client"

import { ProductCard } from "@/components/product/ProductCard"
import { Input } from "@/components/ui/input"
import productsData from "@/json/products.json"
import { Search } from "lucide-react"
import { useMemo, useState } from "react"

export default function ProductsPage() {
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
} 