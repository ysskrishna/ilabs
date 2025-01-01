import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OG Image Generator",
    short_name: "OG Image",
    description: "Create beautiful OG images for your website for free, in simple clicks.",
    start_url: "/",
    display: "standalone",
  }
}
