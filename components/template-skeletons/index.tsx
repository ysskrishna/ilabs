import * as blog from "@/components/template-skeletons/blog"
import * as og from "@/components/template-skeletons/open-graph"
import * as x from "@/components/template-skeletons/x"

export const skeletons = {
  // Open Graph
  "og:basic": og.Basic,
  "og:notice": og.Notice,
  "og:hero": og.Hero,
  "og:image-right": og.ImageRight,
  "og:logos": og.Logos,

  // X Header templates
  "x:header-basic": x.header.Basic,
  "x:header-minimalist": x.header.Minimalist,
  "x:header-logo": x.header.Logo,

  // Blog Cover Image
  "blog:basic": blog.Basic,
}
