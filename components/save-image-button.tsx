"use client"

import { useTemplateStore } from "@/providers/template-store-provider"
import { DownloadIcon } from "@radix-ui/react-icons"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"

import { FormatSelector, ImageFormat } from "@/components/format-selector"

function initResvgWorker():
  | ((msg: { svg: string; width: number; format?: string }) => Promise<string>)
  | undefined {
  if (typeof window === "undefined") return

  const worker = new Worker(new URL("./resvg-worker.ts", import.meta.url))

  const pending = new Map()
  worker.onmessage = (e) => {
    const { _id, url } = e.data
    const resolve = pending.get(_id)
    if (resolve) {
      resolve(url)
      pending.delete(_id)
    }
  }

  return async (msg: object) => {
    const _id = Math.random()
    worker.postMessage({
      ...msg,
      _id,
    })
    return new Promise((resolve) => {
      pending.set(_id, resolve)
    })
  }
}

const renderPNG = initResvgWorker()

export default function SaveImageButton() {
  const { canvas, previewSvg } = useTemplateStore((state) => state)
  const [downloadUrl, setDownloadUrl] = useState<string>()
  const [generating, setGenerating] = useState(false)
  const [format, setFormat] = useState<ImageFormat>("png")
  const anchorElement = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (downloadUrl) {
      anchorElement.current?.click()
      URL.revokeObjectURL(downloadUrl) // 清理 URL
      setDownloadUrl(undefined)
    }
  }, [downloadUrl])

  const downloadSvg = async () => {
    if (!previewSvg) throw new Error("No SVG content")
    const svgBlob = new Blob([previewSvg], { type: "image/svg+xml" })
    return URL.createObjectURL(svgBlob)
  }

  const handleDownload = async () => {
    try {
      setGenerating(true)
      let url: string | undefined

      if (format === "svg") {
        url = await downloadSvg()
      } else {
        if (!previewSvg) throw new Error("No SVG content")
        url = await renderPNG?.({
          svg: previewSvg,
          width: canvas.width,
          format,
        })
      }

      setDownloadUrl(url)
    } finally {
      setGenerating(false)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <FormatSelector value={format} onChange={setFormat} />
      <a
        ref={anchorElement}
        href={downloadUrl}
        download={`og.${format}`}
        className="hidden"
        title={`Download OG Image as ${format.toUpperCase()}`}
      />
      <Button onClick={handleDownload} disabled={generating}>
        {generating ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 animate-spin"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        ) : (
          <DownloadIcon className="mr-2 h-4 w-4" />
        )}
        <span>Save Image</span>
      </Button>
    </div>
  )
}
