import { Spacer } from "@nextui-org/react"

import { ogs, xHeaders } from "@/components/home/Images"
import { siteConfig } from "@/config/site"

export default function Hero() {
  return (
    <nav className="mx-auto mt-20 flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="relative mb-2 text-2xl font-medium sm:text-3xl">
          <span className="mb-4 block text-4xl font-bold leading-[1.2] text-gray-900 sm:text-6xl">
            {siteConfig.name}
          </span>
        </h1>
        <p className="mb-8 text-base text-gray-500 sm:text-xl">
          {siteConfig.description}
        </p>
        <div className="relative overflow-hidden">
          <div className="flex flex-nowrap items-center justify-center gap-4">
            {ogs.map(({ key, item }) => (
              <div key={key} className="flex-shrink-0">
                {item}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent" />
        </div>
        <Spacer y={4} />
        <div className="relative overflow-hidden">
          <div className="flex flex-nowrap items-center justify-center gap-4">
            {xHeaders.map(({ key, item }) => (
              <div key={key} className="flex-shrink-0">
                {item}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </nav>
  )
}
