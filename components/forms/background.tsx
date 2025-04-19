"use client"

import { useTemplateStore } from "@/providers/template-store-provider"
import {
  AngleIcon,
  ArrowBottomLeftIcon,
  ArrowBottomRightIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopLeftIcon,
  ArrowTopRightIcon,
  ArrowUpIcon,
  BorderAllIcon,
  DotsHorizontalIcon,
  GridIcon,
  ValueNoneIcon
} from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { patterns } from "@/lib/patterns"
import {
  GradientDirection,
  GridOverlayParams,
  toBackgroundShorthand,
} from "@/lib/templates/elements/background"

import { ResponsivePopover } from "@/components/responsive-popover"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const solidColors = [
  // red/pink
  "#D14D72",
  "#FF8080",
  "#FF9B9B",
  "#FFABAB",
  "#E8A0BF",
  "#FEBBCC",
  "#FCC8D1",
  "#FFC5C5",

  // orange/yellow
  "#D3756B",
  "#F0997D",
  "#FEBE8C",
  "#FFC3A1",
  "#FFD966",
  "#F2D388",
  "#FCE38A",
  "#FFF6BD",

  // blue/purple
  "#67729D",
  "#7C93C3",
  "#8EA7E9",
  "#95BDFF",
  "#A084DC",
  "#B2A4FF",
  "#DBC4F0",
  "#E5D1FA",

  // green
  "#61876E",
  "#609966",
  "#A6BB8D",
  "#ABC4AA",

  // browns
  "#967E76",
  "#D7C0AE",
  "#EEE3CB",
  "#FFF3E2",

  // gray
  "#525E75",
  "#545B77",
  "#7B8FA1",
  "#9E9FA5",

  // black/white
  "#000000",
  "#FFFFFF",
]

const linearGradients = [
  // red/orange/yellow
  {
    colorStops: ["#EC4899", "#EF4444", "#EAB308"],
  },
  {
    colorStops: ["#CA8A04", "#DC2626"],
  },
  {
    colorStops: ["#F43F5E", "#F87171", "#EF4444"],
  },
  {
    colorStops: ["#FDA4AF", "#F43F5E"],
  },
  {
    colorStops: ["#FB923C", "#FB7185"],
  },
  {
    colorStops: ["#FB7185", "#FDBA74"],
  },
  {
    colorStops: ["#FECACA", "#FCA5A5", "#FEF08A"],
  },
  {
    colorStops: ["#C7D2FE", "#FECACA", "#FEF9C3"],
  },

  // blue/purple
  {
    colorStops: ["#86EFAC", "#3B82F6", "#9333EA"],
  },
  {
    colorStops: ["#86EFAC", "#C084FC"],
  },
  {
    colorStops: ["#C084FC", "#FACC15"],
  },
  {
    colorStops: ["#A5B4FC", "#C084FC"],
  },
  {
    colorStops: ["#F9A8D4", "#D8B4FE", "#818CF8"],
  },
  {
    colorStops: ["#E9D5FF", "#C084FC", "#6B21A8"],
  },
  {
    colorStops: ["#DBEAFE", "#93C5FD", "#3B82F6"],
  },
  {
    colorStops: ["#A5F3FC", "#22D3EE"],
  },

  // green
  {
    colorStops: ["#22C55E", "#15803D"],
  },
  {
    colorStops: ["#10B981", "#65A30D"],
  },
  {
    colorStops: ["#60A5FA", "#34D399"],
  },
  {
    colorStops: ["#BBF7D0", "#4ADE80", "#22C55E"],
  },
  {
    colorStops: ["#BBF7D0", "#22C55E"],
  },
  {
    colorStops: ["#BBF7D0", "#86EFAC", "#3B82F6"],
  },
  {
    colorStops: ["#99F6E4", "#D9F99D"],
  },
  {
    colorStops: ["#FEF08A", "#BBF7D0", "#86EFAC"],
  },

  // gray
  {
    colorStops: ["#434343", "#000000"],
  },
  {
    colorStops: ["#111827", "#4B5563"],
  },
  {
    colorStops: ["#868F96", "#596164"],
  },
  {
    colorStops: ["#D7D2CC", "#304352"],
  },
  {
    colorStops: ["#8BAAAA", "#AE8B9C"],
  },
  {
    colorStops: ["#E5E7EB", "#9CA3AF", "#4B5563"],
  },
  {
    colorStops: ["#F5F7FA", "#C3CFE2"],
  }
]

const DEFAULT_LINEAR_GRADIENT_DIRECTION: GradientDirection = "to top right"

// Add new type for gradient type
type GradientType = "linear" | "radial"

// Add new component for color stop management
function ColorStopList({ colorStops, onChange }: { colorStops: string[], onChange: (colorStops: string[]) => void }) {
  const convertToHex = (color: string) => {
    // If it's already a hex color, return it
    if (color.startsWith('#')) return color
    
    // If it's an rgb color, convert it to hex
    const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1])
      const g = parseInt(rgbMatch[2])
      const b = parseInt(rgbMatch[3])
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
    }
    
    return color
  }

  return (
    <div className="space-y-2">
      {colorStops.map((color, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="size-8 min-w-8 aspect-square rounded-md border"
            style={{ background: color }}
          />
          <Input
            value={convertToHex(color)}
            onChange={(e) => {
              const newColorStops = [...colorStops]
              newColorStops[index] = e.target.value
              onChange(newColorStops)
            }}
            placeholder="#000000"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              const newColorStops = colorStops.filter((_, i) => i !== index)
              onChange(newColorStops)
            }}
          >
            Remove
          </Button>
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onChange([...colorStops, "#000000"])}
      >
        Add Color Stop
      </Button>
    </div>
  )
}

const gridOverlayColors = ["#030712", "#6b7280", "#f9fafb"]
const gridOverlayDefault: Omit<GridOverlayParams, "pattern"> = {
  color: gridOverlayColors[0],
  opacity: 0.5,
  blurRadius: 20,
}

const directionToAngle: Record<GradientDirection, number> = {
  "to top": 0,
  "to top right": 45,
  "to right": 90,
  "to bottom right": 135,
  "to bottom": 180,
  "to bottom left": 225,
  "to left": 270,
  "to top left": 315,
}

export function BackgroundForm() {
  const template = useTemplateStore((state) => state)
  const [gradientType, setGradientType] = useState<GradientType>("linear")
  const [angle, setAngle] = useState(() => {
    if (template.background.type === "linear-gradient") {
      return directionToAngle[template.background.direction as GradientDirection] || 0
    }
    return 0
  })
  const [useCustomAngle, setUseCustomAngle] = useState(false)

  const currentGradient = template.background.type === "linear-gradient" || template.background.type === "radial-gradient"
    ? template.background
    : {
        type: "linear-gradient" as const,
        direction: DEFAULT_LINEAR_GRADIENT_DIRECTION,
        colorStops: ["#000000", "#ffffff"],
        noise: 0.15,
      }

  const getCurrentDirection = () => {
    if (useCustomAngle) {
      return `${angle}deg`
    }
    if (template.background.type === "linear-gradient") {
      return template.background.direction
    }
    return DEFAULT_LINEAR_GRADIENT_DIRECTION
  }

  const handleColorStopsChange = (newColorStops: string[]) => {
    if (gradientType === "linear") {
      template.setBackground({
        type: "linear-gradient",
        direction: getCurrentDirection(),
        colorStops: newColorStops,
        noise: currentGradient.noise,
        gridOverlay: currentGradient.gridOverlay,
      })
    } else {
      template.setBackground({
        type: "radial-gradient",
        direction: "circle at center",
        colorStops: newColorStops,
        noise: currentGradient.noise,
        gridOverlay: currentGradient.gridOverlay,
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Background</CardTitle>
        <CardDescription>
          Set a custom background for your image.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Tabs defaultValue="gradient" className="w-full">
            <TabsList>
              <TabsTrigger value="gradient">Gradient</TabsTrigger>
              <TabsTrigger value="color">Solid Color</TabsTrigger>
            </TabsList>

            <TabsContent value="gradient" className="space-y-4">
              <Card className="p-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Gradient Type</Label>
                    <RadioGroup
                      value={gradientType}
                      onValueChange={(v) => setGradientType(v as GradientType)}
                    >
                      <div className="flex gap-2">
                        <RadioGroupItem value="linear" id="linear" />
                        <Label htmlFor="linear">Linear</Label>
                        <RadioGroupItem value="radial" id="radial" />
                        <Label htmlFor="radial">Radial</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {gradientType === "linear" && (
                    <>
                      <div className="space-y-2">
                        <RadioGroup
                          value={
                            template.background.type === "linear-gradient"
                              ? JSON.stringify(template.background.colorStops)
                              : undefined
                          }
                          onValueChange={(v) => {
                            template.setBackground({
                              type: "linear-gradient",
                              colorStops: JSON.parse(v),
                              direction: template.background.type === "linear-gradient" 
                                ? template.background.direction 
                                : DEFAULT_LINEAR_GRADIENT_DIRECTION,
                              noise: template.background.noise,
                              gridOverlay: template.background.gridOverlay,
                            })
                          }}
                        >
                          <div className="flex flex-wrap gap-1">
                            {linearGradients.map(({ colorStops }) => (
                              <div
                                key={JSON.stringify(colorStops)}
                                className="size-9 min-h-9 min-w-9"
                              >
                                <RadioGroupItem
                                  value={JSON.stringify(colorStops)}
                                  id={JSON.stringify(colorStops)}
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor={JSON.stringify(colorStops)}
                                  className="block aspect-square cursor-pointer rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                  style={{
                                    background: toBackgroundShorthand({
                                      type: "linear-gradient",
                                      direction: template.background.type === "linear-gradient"
                                        ? template.background.direction
                                        : DEFAULT_LINEAR_GRADIENT_DIRECTION,
                                      colorStops,
                                    }),
                                  }}
                                ></Label>
                              </div>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label>Direction</Label>
                        </div>

                        <Card className="p-2">
                          <RadioGroup
                            value={template.background.type === "linear-gradient" ? template.background.direction : DEFAULT_LINEAR_GRADIENT_DIRECTION}
                            onValueChange={(v) => {
                              if (template.background.type === "linear-gradient") {
                                const direction = v as GradientDirection
                                const newAngle = directionToAngle[direction]
                                setAngle(newAngle)
                                template.setBackground({
                                  ...template.background,
                                  direction: direction,
                                })
                              }
                            }}
                          >
                            <div className="grid grid-cols-8 gap-2">
                              <div>
                                <RadioGroupItem
                                  value="to top"
                                  id="to-top"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="to-top"
                                  className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <ArrowUpIcon className="h-4 w-4" />
                                </Label>
                              </div>

                              <div>
                                <RadioGroupItem
                                  value="to top right"
                                  id="to-top-right"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="to-top-right"
                                  className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <ArrowTopRightIcon className="h-4 w-4" />
                                </Label>
                              </div>

                              <div>
                                <RadioGroupItem
                                  value="to right"
                                  id="to-right"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="to-right"
                                  className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <ArrowRightIcon className="h-4 w-4" />
                                </Label>
                              </div>

                              <div>
                                <RadioGroupItem
                                  value="to bottom right"
                                  id="to-bottom-right"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="to-bottom-right"
                                  className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <ArrowBottomRightIcon className="h-4 w-4" />
                                </Label>
                              </div>

                              <div>
                                <RadioGroupItem
                                  value="to bottom"
                                  id="to-bottom"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="to-bottom"
                                  className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <ArrowDownIcon className="h-4 w-4" />
                                </Label>
                              </div>

                              <div>
                                <RadioGroupItem
                                  value="to bottom left"
                                  id="to-bottom-left"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="to-bottom-left"
                                  className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <ArrowBottomLeftIcon className="h-4 w-4" />
                                </Label>
                              </div>

                              <div>
                                <RadioGroupItem
                                  value="to left"
                                  id="to-left"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="to-left"
                                  className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <ArrowLeftIcon className="h-4 w-4" />
                                </Label>
                              </div>

                              <div>
                                <RadioGroupItem
                                  value="to top left"
                                  id="to-top-left"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="to-top-left"
                                  className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <ArrowTopLeftIcon className="h-4 w-4" />
                                </Label>
                              </div>
                            </div>
                          </RadioGroup>

                          <div className="mt-4 flex items-center gap-2">
                            <Slider
                              value={[angle]}
                              onValueChange={([value]) => {
                                setAngle(value)
                                if (template.background.type === "linear-gradient") {
                                  template.setBackground({
                                    ...template.background,
                                    direction: `${value}deg`,
                                  })
                                }
                              }}
                              max={355}
                              step={1}
                            />
                            <div className="flex items-center ml-2 gap-1">
                              <AngleIcon className="h-5 w-5 " />
                              <Input
                                type="number"
                                value={angle}
                                min={0}
                                max={355}
                                onChange={(e) => {
                                  const value = Math.min(355, Math.max(0, Number(e.target.value)))
                                  setAngle(value)
                                  if (template.background.type === "linear-gradient") {
                                    template.setBackground({
                                      ...template.background,
                                      direction: `${value}deg`,
                                    })
                                  }
                                }}
                                className="w-20"
                              />
                            </div>
                          </div>
                        </Card>
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label>Color Stops</Label>
                    <ColorStopList
                      colorStops={currentGradient.colorStops}
                      onChange={handleColorStopsChange}
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="color">
              <Card className="p-2">
                <RadioGroup
                  value={
                    template.background.type === "color"
                      ? template.background.color
                      : undefined
                  }
                  onValueChange={(v) => {
                    template.setBackground({
                      type: "color",
                      color: v,
                      noise: template.background.noise,
                    })
                  }}
                >
                  <div className="flex flex-wrap gap-1">
                    {solidColors.map((color) => (
                      <div key={color} className="h-9 min-h-9 w-9 min-w-9">
                        <RadioGroupItem
                          value={color}
                          id={color}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={color}
                          className="block aspect-square cursor-pointer rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          style={{
                            background: color,
                          }}
                        ></Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
                <div className="mt-4">
                  <Label htmlFor="hex-input">Hex Color</Label>
                  <div className="flex items-center gap-2">
                    <div
                      className="size-8 flex-shrink-0 aspect-square rounded-md border"
                      style={{
                        background: template.background.type === "color" ? template.background.color : "#000000",
                      }}
                    />
                    <Input
                      id="hex-input"
                      value={template.background.type === "color" ? template.background.color : ""}
                      onChange={(e) => {
                        const value = e.target.value
                        if (value.match(/^#[0-9A-Fa-f]{6}$/)) {
                          template.setBackground({
                            type: "color",
                            color: value,
                            noise: template.background.noise,
                          })
                        }
                      }}
                      placeholder="#000000"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid gap-2 pt-2">
            <div className="flex justify-between">
              <div className="text-sm font-medium">Grid Overlay</div>
              {/* <Badge>New</Badge> */}
            </div>
            <ResponsivePopover
              title="Grid Overlay"
              description="Apply a grid overlay to the background."
              trigger={
                <Button variant="outline" className="justify-start">
                  {(template.background.gridOverlay?.pattern &&
                    patterns[template.background.gridOverlay?.pattern].label) ||
                    "Select a pattern"}
                </Button>
              }
            >
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="width">Pattern</Label>
                  <RadioGroup
                    defaultValue="none"
                    value={
                      template.background.gridOverlay
                        ? template.background.gridOverlay.pattern
                        : "none"
                    }
                    onValueChange={(v) => {
                      if (v === "none") {
                        template.setBackground({
                          ...template.background,
                          gridOverlay: undefined,
                        })
                      } else {
                        template.setBackground({
                          ...template.background,
                          gridOverlay: {
                            pattern: v as GridOverlayParams["pattern"],
                            color:
                              template.background.gridOverlay?.color ||
                              gridOverlayDefault.color,
                            opacity:
                              template.background.gridOverlay?.opacity ||
                              gridOverlayDefault.opacity,
                            blurRadius:
                              template.background.gridOverlay?.blurRadius ||
                              gridOverlayDefault.blurRadius,
                          },
                        })
                      }
                    }}
                  >
                    <div className="grid grid-cols-4 gap-2">
                      <div>
                        <RadioGroupItem
                          value="none"
                          id="none"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="none"
                          className="flex cursor-pointer flex-col items-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <ValueNoneIcon className="h-5 w-5" />
                          <span className="mt-1 text-xs">None</span>
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="grid"
                          id="grid"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="grid"
                          className="flex cursor-pointer flex-col items-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <GridIcon className="h-5 w-5" />
                          <span className="mt-1 text-xs">Grid</span>
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="graph-paper"
                          id="graph-paper"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="graph-paper"
                          className="flex cursor-pointer flex-col items-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <BorderAllIcon className="h-5 w-5" />
                          <span className="mt-1 text-xs">Graph</span>
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="dots"
                          id="dots"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="dots"
                          className="flex cursor-pointer flex-col items-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <DotsHorizontalIcon className="h-5 w-5" />
                          <span className="mt-1 text-xs">Dots</span>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="text-color">Color</Label>
                  <RadioGroup
                    id="text-color"
                    disabled={!template.background.gridOverlay}
                    value={
                      template.background.gridOverlay
                        ? template.background.gridOverlay.color
                        : undefined
                    }
                    onValueChange={(v) => {
                      template.setBackground({
                        ...template.background,
                        gridOverlay: {
                          ...template.background.gridOverlay,
                          color: v,
                        } as GridOverlayParams,
                      })
                    }}
                  >
                    <div className="flex flex-wrap gap-1">
                      {gridOverlayColors.map((color) => (
                        <div key={color} className="h-9 min-h-9 w-9 min-w-9">
                          <RadioGroupItem
                            value={color}
                            id={color}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={color}
                            className="block aspect-square cursor-pointer rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            style={{
                              background: color,
                            }}
                          ></Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="opacity">Opacity</Label>
                    <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                      {template.background.gridOverlay?.opacity || 0}
                    </span>
                  </div>
                  <Slider
                    id="opacity"
                    max={1}
                    defaultValue={[template.background.noise]}
                    step={0.05}
                    disabled={!template.background.gridOverlay}
                    value={
                      template.background.gridOverlay
                        ? [template.background.gridOverlay.opacity]
                        : [0]
                    }
                    onValueChange={(v) => {
                      template.setBackground({
                        ...template.background,
                        gridOverlay: {
                          ...template.background.gridOverlay,
                          opacity: v[0],
                        } as GridOverlayParams,
                      })
                    }}
                    className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    aria-label="Opacity"
                  />
                </div>

                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="blur-radius">Blur Radius</Label>
                    <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                      {template.background.gridOverlay?.blurRadius || 0}%
                    </span>
                  </div>
                  <Slider
                    id="blur-radius"
                    max={100}
                    defaultValue={[template.background.noise]}
                    step={5}
                    disabled={!template.background.gridOverlay}
                    value={
                      template.background.gridOverlay
                        ? [template.background.gridOverlay.blurRadius]
                        : [0]
                    }
                    onValueChange={(v) => {
                      template.setBackground({
                        ...template.background,
                        gridOverlay: {
                          ...template.background.gridOverlay,
                          blurRadius: v[0],
                        } as GridOverlayParams,
                      })
                    }}
                    className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    aria-label="Blur"
                  />
                </div>
              </div>
            </ResponsivePopover>
          </div>

          <div className="grid gap-2">
            <HoverCard openDelay={200}>
              <HoverCardTrigger asChild>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="noise">Noise</Label>
                    <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                      {template.background.noise}
                    </span>
                  </div>
                  <Slider
                    id="noise"
                    max={1}
                    defaultValue={[template.background.noise]}
                    step={0.05}
                    value={[template.background.noise]}
                    onValueChange={(v) =>
                      template.setBackground({
                        ...template.background,
                        noise: v[0],
                      })
                    }
                    className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    aria-label="Noise"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                align="start"
                className="w-[260px] text-sm"
                side="top"
              >
                Control the level background noise to add texture. A value
                between 0.1 to 0.25 is recommended.
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
