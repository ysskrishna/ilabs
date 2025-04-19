import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "iLabs",
    short_name: "iLabs",
    description: "A collection of innovative tools, boilerplates, and utilities to enhance your development workflow.",
    start_url: "/",
    display: "standalone",
  }
}
