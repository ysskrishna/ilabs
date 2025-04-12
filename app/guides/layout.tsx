
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-7xl py-6">
      {children}
    </div>
  )
}
