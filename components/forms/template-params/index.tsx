import * as blog from "@/components/forms/template-params/blog"
import * as og from "@/components/forms/template-params/open-graph"
import * as x from "@/components/forms/template-params/x"

export const templates = {
  // Open Graph
  "og:basic": og.basic,
  "og:notice": og.notice,
  "og:hero": og.hero,
  "og:image-right": og.imageRight,
  "og:logos": og.logos,

  // X Header templates
  "x:header-basic": x.header.basic,
  "x:header-minimalist": x.header.minimalist,
  "x:header-logo": x.header.logo,

  // Blog
  "blog:basic": blog.basic,
}
