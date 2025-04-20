import { z } from "zod"

import config from "@/common/config"
import { backgroundSchema } from "@elements/background"
import { canvasSchema } from "@elements/canvas"
import { textSchema } from "@elements/text"

export const minimalistTemplateSchema = z.object({
  name: z.literal("x:header-minimalist"),
  params: z.object({
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(600),
        fontSize: textSchema.shape.fontSize.default(48),
      })
    ),
    description: textSchema.merge(
      z.object({
        // apply defaults
        fontSize: textSchema.shape.fontSize.default(48),
      })
    ),
  }),
  background: backgroundSchema,
  canvas: canvasSchema,
})
export type MinimalistTemplate = z.infer<typeof minimalistTemplateSchema>

export const minimalistTemplateDefault: MinimalistTemplate = {
  name: "x:header-minimalist",
  params: {
    title: {
      text: config?.productName,
      fontFamily: "inter",
      fontWeight: 600,
      fontSize: 48,
      color: "#f9fafb",
    },
    description: {
      text: "| Free Open Graph Image Generator",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 48,
      color: "#f9fafb",
    },
  },
  background: {
    type: "linear-gradient",
    direction: "to top right",
    colorStops: ["#434343", "#000000"],
    noise: 0.05,
  },
  canvas: {
    width: 1500,
    height: 500,
  },
}
