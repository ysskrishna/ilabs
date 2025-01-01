import Link from "next/link"
import { GithubIcon } from "lucide-react"
import { FaBluesky, FaXTwitter } from "react-icons/fa6"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.url}
              title="Free OG Image Generator"
              prefetch={false}
              className="font-mono font-semibold hover:underline"
            >
              Free OG Image Generator
            </Link>

            <Button variant="link" asChild>
              <Link
                href="/guides"
                prefetch={false}
                title="Guides"
                aria-label="Guides"
              >
                Guides
              </Link>
            </Button>
          </div>

          <div className="flex flex-col items-start gap-2 sm:items-start">
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
              <Link
                href="https://github.com/weijunext/ogimage-click"
                prefetch={false}
                title="ogimage-click"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5 text-black dark:text-white" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </footer>
  )
}
