"use client"

import { useCallback, useState } from "react"
import { IoCheckmarkSharp } from "react-icons/io5"
import { LuCopy } from "react-icons/lu"

const CopyButton = ({
  text,
  className,
}: {
  text: string
  className: string
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => setIsCopied(true))
    setTimeout(() => setIsCopied(false), 1000)
  }, [text])

  return (
    <button className={className} onClick={copy}>
      {isCopied ? <IoCheckmarkSharp /> : <LuCopy />}
    </button>
  )
}

export default CopyButton
