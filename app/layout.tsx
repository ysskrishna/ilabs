import "@/styles/globals.css"

import { TemplateStoreProvider } from "@/providers/template-store-provider"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

import GoogleAdsense from "@/app/GoogleAdsense"
import GoogleAnalytics from "@/app/GoogleAnalytics"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import { ThemeProvider } from "@/components/theme-provider"
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  ...siteConfig,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Header />
          <main className="mx-auto min-h-[calc(100dvh-84px)] max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
            <TemplateStoreProvider>{children}</TemplateStoreProvider>
          </main>

          <Separator />
          <Footer />
        </ThemeProvider>

        <Toaster />

        {process.env.NODE_ENV === "production" ? (
          <>
            <GoogleAnalytics />
            <GoogleAdsense />
            {/* <SpeedInsights />
            <Analytics /> */}
          </>
        ) : (
          <></>
        )}
      </body>
    </html>
  )
}
