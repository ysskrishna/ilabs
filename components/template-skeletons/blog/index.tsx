import { Skeleton } from "@/components/template-skeletons/skeleton"

export function Basic() {
  return (
    <div className="flex aspect-video h-full w-full flex-col items-center justify-center">
      <Skeleton className="h-4 w-4 rounded-full md:h-8 md:w-8" />
      <Skeleton className="mt-2 h-3 w-1/2 md:mt-3 md:h-4" />
      <Skeleton className="mt-1 h-2 w-3/4 md:mt-2 md:h-3" />
    </div>
  )
}

export function CodeBlock() {
  return (
    <div className="flex aspect-video h-full w-full flex-col justify-center p-8">
      {/* 左侧代码块 */}
      <div className="flex w-2/3 flex-col space-y-2">
        <Skeleton className="h-2 w-1/2 md:h-3" /> {/* 代码行1 */}
        <Skeleton className="h-2 w-3/4 md:h-3" /> {/* 代码行2 */}
        <Skeleton className="h-2 w-1/3 md:h-3" /> {/* 代码行3 */}
      </div>

      {/* 右上角标题 */}
      <div className="absolute right-8 top-8 text-right">
        <Skeleton className="h-4 w-48 md:h-6" /> {/* 主标题 */}
        <Skeleton className="mt-2 h-2 w-32 md:h-3" /> {/* 副标题/标签 */}
      </div>
    </div>
  )
}

export function Terminal() {
  return (
    <div className="flex aspect-video h-full w-full flex-col p-6">
      {/* 终端窗口框架 */}
      <div className="flex h-full w-full flex-col rounded-lg border border-neutral-200">
        {/* 终端顶栏 */}
        <div className="flex h-8 items-center space-x-2 border-b border-neutral-200 px-4">
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-3 w-3 rounded-full" />
        </div>

        {/* 终端内容 */}
        <div className="flex-1 p-4">
          <Skeleton className="h-3 w-1/3" /> {/* 命令行1 */}
          <Skeleton className="mt-2 h-3 w-1/2" /> {/* 命令行2 */}
          <Skeleton className="mt-4 h-4 w-2/3" /> {/* 输出结果 */}
        </div>
      </div>
    </div>
  )
}

export function TechGrid() {
  return (
    <div className="flex aspect-video h-full w-full flex-col items-center justify-center p-8">
      {/* 顶部标题 */}
      <Skeleton className="h-5 w-2/3 md:h-8" />

      {/* 技术图标网格 */}
      <div className="mt-8 grid grid-cols-4 gap-4 md:gap-6">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="h-8 w-8 rounded-lg md:h-12 md:w-12" />
        ))}
      </div>

      {/* 底部标签/描述 */}
      <Skeleton className="mt-6 h-3 w-1/3 md:h-4" />
    </div>
  )
}

export function Architecture() {
  return (
    <div className="flex aspect-video h-full w-full items-center justify-center p-8">
      {/* 架构图 */}
      <div className="flex w-full max-w-2xl flex-col">
        {/* 顶层服务 */}
        <div className="flex justify-center space-x-4">
          <Skeleton className="h-8 w-24 rounded-lg md:h-12" />
          <Skeleton className="h-8 w-24 rounded-lg md:h-12" />
        </div>

        {/* 连接线 */}
        <Skeleton className="mx-auto my-4 h-8 w-1 md:h-12" />

        {/* 中间层 */}
        <div className="flex justify-center space-x-4">
          <Skeleton className="h-8 w-32 rounded-lg md:h-12" />
        </div>

        {/* 连接线 */}
        <Skeleton className="mx-auto my-4 h-8 w-1 md:h-12" />

        {/* 底层服务 */}
        <div className="flex justify-center space-x-4">
          <Skeleton className="h-8 w-24 rounded-lg md:h-12" />
          <Skeleton className="h-8 w-24 rounded-lg md:h-12" />
          <Skeleton className="h-8 w-24 rounded-lg md:h-12" />
        </div>
      </div>
    </div>
  )
}
