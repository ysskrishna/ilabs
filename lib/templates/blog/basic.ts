import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "@elements/background"
import { canvasSchema } from "@elements/canvas"
import { imageSchema } from "@elements/image"
import { textSchema } from "@elements/text"

export const basicTemplateSchema = z.object({
  name: z.literal("blog:basic"),
  params: z.object({
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(700),
        fontSize: textSchema.shape.fontSize.default(52),
      })
    ),
    description: textSchema.merge(
      z.object({
        // apply defaults
        fontSize: textSchema.shape.fontSize.default(30),
      })
    ),
    logo: imageSchema,
  }),
  background: backgroundSchema,
  canvas: canvasSchema,
})
export type BasicTemplate = z.infer<typeof basicTemplateSchema>

export const basicTemplateDefault: BasicTemplate = {
  name: "blog:basic",
  params: {
    title: {
      text: "Latest: The Power of OG Images",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 52,
      color: "#030712",
    },
    description: {
      text: "Learn how to boost your social media engagement with OG Images in 2025. Discover platform-specific best practices, technical specifications, and SEO benefits of Open Graph images for Social Media.",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 30,
      color: "#4B5563",
    },
    logo: {
      url: absoluteUrl("/logo.png"),
    },
  },
  background: {
    type: "linear-gradient",
    direction: "to top right",
    colorStops: [
      "#d5d4d0 0%",
      "#d5d4d0 1%",
      "#eeeeec 31%",
      "#efeeec 75%",
      "#e9e9e7 100%",
    ],
    noise: 0.15,
    gridOverlay: {
      pattern: "grid",
      color: "#6b7280",
      opacity: 0.35,
      blurRadius: 20,
    },
  },
  canvas: {
    width: 1200,
    height: 630,
  },
}
