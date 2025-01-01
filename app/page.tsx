import { InfoCircledIcon } from "@radix-ui/react-icons"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyApiRequestButton } from "@/components/copy-api-request-button"
import { BackgroundForm } from "@/components/forms/background"
import Hero from "@/components/home/Hero"
import HowToAddSection from "@/components/home/HowToAddSection"
import PreviewRenderer from "@/components/preview-renderer"
import SaveImageButton from "@/components/save-image-button"
import TemplateForm from "@/components/template-form"
import TemplateSelector from "@/components/template-selector"

import ReasonsSection from "../components/home/ReasonsSection"

export default function Home() {
  return (
    <div>
      <div className="pb-6">
        <Hero />
      </div>
      <div className="space-y-4">
        <TemplateSelector />

        <Separator />

        <section className="grid gap-x-4 gap-y-4 lg:grid-cols-3">
          <div className="order-last col-span-1 space-y-4 lg:order-first">
            <TemplateForm />

            <BackgroundForm />
          </div>

          <div className="order-first lg:order-last lg:col-span-2">
            <div className="sticky top-0 grow-0 space-y-4">
              <Card className="col-span-2 px-2 md:px-4">
                <div className="overflow-hidden">
                  <PreviewRenderer />
                </div>
              </Card>

              <Tabs defaultValue="save">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="save">Save Image</TabsTrigger>
                  <TabsTrigger value="format">Format Tips</TabsTrigger>
                  <TabsTrigger value="api">API Request</TabsTrigger>
                </TabsList>

                <TabsContent value="save">
                  <Card>
                    <CardHeader>
                      <CardTitle>Save Image</CardTitle>
                      <CardDescription>
                        Export the image as a PNG, JPEG or WebP.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex flex-col items-start">
                        <p className="text-sm">
                          For optimal Open Graph (OG) Image display on social
                          media platforms like Twitter, Facebook, and LinkedIn,
                          use PNG (recommended), JPEG or WebP format.
                        </p>
                      </div>

                      <SaveImageButton />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="format">
                  <Card>
                    <CardHeader>
                      <CardTitle>Open Graph Image Format Tips</CardTitle>
                      <CardDescription>
                        Choose the optimal format for social media platforms.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center space-x-2">
                      <ul className="text-sm">
                        <li>PNG: Provides better quality for text and logos</li>
                        <li>
                          JPEG: Ideal for photographs and complex images with
                          many colors
                        </li>
                        <li>
                          WebP: Modern format offering excellent compression
                          while maintaining quality
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="api">
                  <Card>
                    <CardHeader>
                      <CardTitle>API Request</CardTitle>
                      <CardDescription>
                        Generate Open Graph images on the fly with our API.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between space-x-2">
                      <div className="flex items-center">
                        <InfoCircledIcon className="mr-2 h-4 w-4" />
                        <p className="text-sm">
                          Copy the request body as JSON or a cURL command.
                        </p>
                      </div>

                      <CopyApiRequestButton />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <ReasonsSection />

        <HowToAddSection />
      </div>
    </div>
  )
}
