"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Product } from "@/types/product"
import { Search } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useMemo, useState } from "react"

const productsList: Product[] = [
  {
    id: 1,
    name: "Express React SEO Starter",
    description: "A full-stack TypeScript application demonstrating advanced SEO optimization using React-Helmet-Async with Express.js backend.",
    price: "Free",
    category: "Boilerplate",
    features: ["TypeScript", "React", "Express", "SEO", "TailwindCSS"],
    url: "https://www.producthunt.com/posts/express-react-typescript-seo-starter",
    productHuntId: "947185",
    featured: true
  },
  {
    id: 2,
    name: "FastAPI Sync/Async Starter",
    description: "Modern Python web application template built with FastAPI, demonstrating sync vs async operations with SQLAlchemy 2.0.",
    price: "Free",
    category: "Boilerplate",
    features: ["Python", "FastAPI", "SQLAlchemy", "Redis", "Docker"],
    url: "https://www.producthunt.com/products/fastapi-sync-async-starter-template",
    productHuntId: "945292",
    featured: true
  },
  {
    id: 3,
    name: "Directory Printer",
    description: "A utility tool for printing directory structures in a clean and organized format.",
    price: "Free",
    category: "Utility",
    features: ["File System", "CLI", "Organization"],
    url: "https://www.producthunt.com/products/directory-printer",
    productHuntId: "867506",
    featured: true
  },
  {
    id: 4,
    name: "Tkinter Poetry Starter",
    description: "A starter template for building Python GUI applications using Tkinter with Poetry for dependency management.",
    price: "Free",
    category: "Boilerplate",
    features: ["Python", "Tkinter", "GUI", "Poetry"],
    url: "https://www.producthunt.com/products/tkinter-poetry-starter-template",
    productHuntId: "896349",
    featured: true
  },
  {
    id: 5,
    name: "Dropbox Lite",
    description: "A lightweight file storage and sharing solution inspired by Dropbox.",
    price: "Free",
    category: "Cloud Storage",
    features: ["File Storage", "Sharing", "Cloud"],
    url: "https://github.com/ysskrishna/dropbox-lite"
  },
  {
    id: 6,
    name: "Solana Trading Bot",
    description: "Automated trading bot for the Solana blockchain with advanced trading strategies.",
    price: "Free",
    category: "Crypto",
    features: ["Solana", "Trading", "Automation", "Crypto"],
    url: "https://github.com/ysskrishna/solana-trading-bot"
  },
  {
    id: 7,
    name: "LibMate",
    description: "A comprehensive library management system for organizing and tracking books.",
    price: "Free",
    category: "Library",
    features: ["Books", "Management", "Organization"],
    url: "https://github.com/ysskrishna/libmate"
  },
  {
    id: 8,
    name: "PixelMotion",
    description: "A creative tool for generating pixel art animations and motion graphics.",
    price: "Free",
    category: "Design",
    features: ["Pixel Art", "Animation", "Graphics"],
    url: "https://github.com/ysskrishna/PixelMotion"
  },
  {
    id: 9,
    name: "ShopZone",
    description: "An e-commerce platform for managing online stores and product listings.",
    price: "Free",
    category: "E-commerce",
    features: ["E-commerce", "Products", "Shopping"],
    url: "https://github.com/ysskrishna/shopzone"
  },
  {
    id: 10,
    name: "MetricFlow",
    description: "A data analytics platform for tracking and visualizing business metrics.",
    price: "Free",
    category: "Analytics",
    features: ["Analytics", "Metrics", "Visualization"],
    url: "https://github.com/ysskrishna/metricflow"
  },
  {
    id: 11,
    name: "AI Support Bot",
    description: "An intelligent customer support chatbot powered by AI for automated assistance.",
    price: "Free",
    category: "AI",
    features: ["AI", "Chatbot", "Support", "Automation"],
    url: "https://github.com/ysskrishna/ai-support-bot"
  },
  {
    id: 12,
    name: "Crew Recruiting Chatbot",
    description: "An AI-powered chatbot for streamlining the crew recruitment process.",
    price: "Free",
    category: "HR",
    features: ["Recruitment", "Chatbot", "HR", "Automation"],
    url: "https://github.com/ysskrishna/crew-recruiting-chatbot-app"
  }
]

export default function ProductsPage() {
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return productsList

    const query = searchQuery.toLowerCase()
    return productsList.filter((product) => {
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
                      <a 
                        href={`${product.url}?embed=true&utm_source=badge-featured&utm_medium=badge`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <img 
                          src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${product.productHuntId}&theme=${theme === 'dark' ? 'dark' : 'neutral'}`} 
                          alt={`${product.name} | Product Hunt`} 
                          style={{ width: '250px', height: '54px' }} 
                          width="250" 
                          height="54" 
                        />
                      </a>
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