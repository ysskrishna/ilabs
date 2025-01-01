"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TabsWrapperProps {
  htmlContent: React.ReactNode
  nextjsContent: React.ReactNode
}

export function TabsWrapper({ htmlContent, nextjsContent }: TabsWrapperProps) {
  return (
    <Tabs defaultValue="html" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="html">HTML</TabsTrigger>
        <TabsTrigger value="nextjs">Next.js App Router</TabsTrigger>
      </TabsList>

      <TabsContent value="html">{htmlContent}</TabsContent>
      <TabsContent value="nextjs">{nextjsContent}</TabsContent>
    </Tabs>
  )
}
