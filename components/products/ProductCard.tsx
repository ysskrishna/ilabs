"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Product } from "@/types/product"
import { useTheme } from "next-themes"
import Link from "next/link"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { theme } = useTheme()

  return (
    <Link 
      key={product.id} 
      href={product.url}
      {...(!product.isInternal ? {
        target: "_blank",
        rel: "noopener noreferrer"
      } : {})}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(`${product.url}?embed=true&utm_source=badge-featured&utm_medium=badge`, '_blank', 'noopener,noreferrer');
                  }}
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
  )
} 