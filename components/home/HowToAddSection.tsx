
import { HtmlCodeBlock, NextjsCodeBlock } from "./howToAddSection/CodeBlock"
import { TabsWrapper } from "./howToAddSection/TabsWrapper"

export default function HowToAddSection() {
  return (
    <section className="mx-auto max-w-7xl py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How to Add Open Graph Image
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500 dark:text-gray-300 sm:mt-4">
          Add social media preview images to your website in minutes. Choose
          your preferred method below (HTML or Next.js App Router).
        </p>
      </div>

      <div className="mt-12">
        <TabsWrapper
          htmlContent={<HtmlCodeBlock />}
          nextjsContent={<NextjsCodeBlock />}
        />
      </div>
    </section>
  )
}
