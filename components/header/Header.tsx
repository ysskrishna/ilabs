"use client"

import Link from "next/link"
import { useState } from "react"

import config from "@/common/config"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between py-4 px-4 pb-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-8">
        <div>
          <Link
            href="/"
            title={config?.productName}
            prefetch={false}
            className="flex items-center space-x-2"
          >
            <img src="/logo.svg" alt="Logo" className="h-8 w-8 transition-all duration-300 dark:invert" />
            <span className="text-2xl font-bold">
              {config?.productName}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-x-6">
          <Link
            href="/products"
            className="text font-medium hover:text-primary transition-colors"
          >
            Products
          </Link>
          <Link
            href="/blogs"
            className="text font-medium hover:text-primary transition-colors"
          >
            Blogs
          </Link>
          <Link
            href="/creator"
            className="text font-medium hover:text-primary transition-colors"
          >
            Creator
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-x-4">
        <ModeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Mode Toggle */}
      <div className="hidden md:block">
        <ModeToggle />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/products"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/blogs"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/creator"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Creator
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
