import Link from "next/link"
import { FaGithub, FaGlobe, FaHeart, FaLinkedin, FaProductHunt } from "react-icons/fa"

import config from "@/common/config"
import { ModeToggle } from "@/components/mode-toggle"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
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
          </div>

          <div className="text-start sm:text-center">
            <Link
              href="/creator"
              className="text flex items-center gap-2 sm:justify-center"
            >
              Made with <FaHeart className="h-4 w-4 text-black dark:text-white" /> by ysskrishna
            </Link>
          </div>

          <div className="flex flex-col items-start gap-2 sm:items-start">
            <div className="flex items-center gap-x-4">
              <Link
                href={config?.author?.url}
                prefetch={false}
                title="View my Website"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Website"
              >
                <FaGlobe className="h-5 w-5 text-black dark:text-white" />
              </Link>
              <Link
                href={config?.author?.linkedin}
                prefetch={false}
                title="Connect on LinkedIn"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5 text-black dark:text-white" />
              </Link>
              <Link
                href={config?.author?.github}
                prefetch={false}
                title="View on GitHub"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5 text-black dark:text-white" />
              </Link>
              <Link
                href={config?.author?.productHunt}
                prefetch={false}
                title="Follow on Product Hunt"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Product Hunt"
              >
                <FaProductHunt className="h-5 w-5 text-black dark:text-white" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </nav>

      </div>
    </footer>
  )
}
