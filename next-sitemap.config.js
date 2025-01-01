/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://ogimage.click",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["*.webp", "/manifest.webmanifest"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/assets/", "/samples/", "showcase"],
      },
    ],
  },
}
