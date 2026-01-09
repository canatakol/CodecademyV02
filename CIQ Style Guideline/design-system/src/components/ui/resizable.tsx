import { GripVertical } from "lucide-react"
import { Panel, Group, Separator } from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof Group>) => (
  <Group
    className={cn(
      "flex h-full w-full data-[orientation=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean
}) => (
  <Separator
    className={cn(
      "relative flex w-1.5 items-center justify-center bg-border hover:bg-accent transition-colors after:absolute after:inset-y-0 after:left-1/2 after:w-3 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[orientation=vertical]:h-1.5 data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-3 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:-translate-y-1/2 data-[orientation=vertical]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90 [&[aria-orientation=horizontal]]:h-1.5 [&[aria-orientation=horizontal]]:w-full [&[aria-orientation=horizontal]]:after:left-0 [&[aria-orientation=horizontal]]:after:h-3 [&[aria-orientation=horizontal]]:after:w-full [&[aria-orientation=horizontal]]:after:-translate-y-1/2 [&[aria-orientation=horizontal]]:after:translate-x-0 [&[aria-orientation=horizontal]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

