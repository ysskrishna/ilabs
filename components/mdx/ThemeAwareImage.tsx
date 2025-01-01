"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function ThemeAwareImage({ srcLight, srcDark, alt, ...props }: any) {
  const { resolvedTheme } = useTheme()
  const [imageSrc, setImageSrc] = useState(
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  ) // 默认使用亮色主题图片
  const host = "/"
  useEffect(() => {
    if (resolvedTheme === "dark") {
      setImageSrc(`${host}/${srcDark || props.src}`)
    } else {
      setImageSrc(`${host}/${srcLight || props.src}`)
    }
  }, [resolvedTheme, srcLight, srcDark])

  return (
    <figure>
      <img
        className="block rounded-md border border-gray-200 bg-gray-100"
        src={imageSrc}
        {...props}
        alt={alt || ""}
      />
    </figure>
  )
}
