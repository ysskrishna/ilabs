import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type ImageFormat = "png" | "svg" | "webp" | "jpg" // 保持 jpg 作为格式标识符

interface FormatSelectorProps {
  value: ImageFormat
  onChange: (value: ImageFormat) => void
}

export function FormatSelector({ value, onChange }: FormatSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Format" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="png">PNG</SelectItem>
        <SelectItem value="jpg">JPEG</SelectItem>
        <SelectItem value="webp">WebP</SelectItem>
        {/* <SelectItem value="svg">SVG</SelectItem> */}
      </SelectContent>
    </Select>
  )
}
