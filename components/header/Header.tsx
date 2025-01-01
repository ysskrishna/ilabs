import Link from "next/link"
import { FaBluesky, FaXTwitter } from "react-icons/fa6"

import { siteConfig } from "@/config/site"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 pb-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-4">
        <div>
          <Link
            href="/"
            title="Free OG Image Generator"
            prefetch={false}
            className="flex items-center space-x-2"
          >
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="hidden text-2xl font-bold md:block">
              Free OG Image Generator
            </span>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <Link
          href={siteConfig.authors[0].twitter || "/"}
          prefetch={false}
          title="Follow me on Twitter"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Twitter"
        >
          <FaXTwitter className="h-5 w-5 text-black dark:text-white" />
        </Link>
        <Link
          href={siteConfig.authors[0].bluesky || "/"}
          prefetch={false}
          target="_blank"
          title="Follow me on Bluesky"
          rel="noopener noreferrer nofollow"
          aria-label="Bluesky"
        >
          <FaBluesky className="h-5 w-5 text-black dark:text-white" />
        </Link>
        <ModeToggle />
      </div>
    </nav>
  )
}
