export function absoluteUrl(path: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (typeof window !== "undefined"
      ? window.location.origin
      : `https://${process.env.VERCEL_URL}`)
  const absoluteUrl = new URL(path, baseUrl)
  return absoluteUrl.toString()
}
