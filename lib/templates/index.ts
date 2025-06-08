import { z } from "zod"

import * as blog from "@/lib/templates/blog"
import * as og from "@/lib/templates/open-graph"
import * as x from "@/lib/templates/x"

const templateNameSchema = z.union([
  // Open Graph
  z.literal("og:image-right"),
  z.literal("og:basic"),
  z.literal("og:hero"),
  z.literal("og:notice"),
  z.literal("og:logos"),

  // X Header templates
  z.literal("x:header-basic"),
  z.literal("x:header-minimalist"),
  z.literal("x:header-logo"),

  // Blog
  z.literal("blog:basic"),
])
export type TemplateName = z.infer<typeof templateNameSchema>

export const templateSchema = z.discriminatedUnion("name", [
  // Open Graph
  og.imageRightTemplateSchema,
  og.basicTemplateSchema,
  og.heroTemplateSchema,
  og.noticeTemplateSchema,
  og.logosTemplateSchema,

  // X Header templates
  x.header.basicTemplateSchema,
  x.header.minimalistTemplateSchema,
  x.header.logoTemplateSchema,

  // Blog
  blog.basicTemplateSchema,
])
export type Template = z.infer<typeof templateSchema>

export const templateDefaults: Record<TemplateName, Template> = {
  // Open Graph
  "og:image-right": og.imageRightTemplateDefault,
  "og:basic": og.basicTemplateDefault,
  "og:hero": og.heroTemplateDefault,
  "og:notice": og.noticeTemplateDefault,
  "og:logos": og.logosTemplateDefault,

  // X Header templates
  "x:header-basic": x.header.basicTemplateDefault,
  "x:header-minimalist": x.header.minimalistTemplateDefault,
  "x:header-logo": x.header.logoTemplateDefault,

  // Blog
  "blog:basic": blog.basicTemplateDefault,
}
