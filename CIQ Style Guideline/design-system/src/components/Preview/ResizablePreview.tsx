import * as React from "react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizablePreview() {
  const [size, setSize] = React.useState(30)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto p-4 content-start items-start">
      {/* Example 1: Horizontal */}
      <div className="space-y-2">
        <div className="text-sm font-medium">Horizontal</div>
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-[200px] rounded-lg border w-full"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Example 2: Vertical */}
      <div className="space-y-2">
        <div className="text-sm font-medium">Vertical</div>
        <ResizablePanelGroup
          orientation="vertical"
          className="min-h-[200px] rounded-lg border w-full"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Header</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Example 3: Handle */}
      <div className="space-y-2">
        <div className="text-sm font-medium">Handle</div>
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-[200px] rounded-lg border w-full"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Example 4: Nested */}
      <div className="space-y-2">
        <div className="text-sm font-medium">Nested</div>
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-[200px] rounded-lg border w-full"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup orientation="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Example 5: Controlled */}
      <div className="space-y-2">
        <div className="text-sm font-medium">Controlled</div>
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-[200px] rounded-lg border w-full"
        >
          <ResizablePanel
            defaultSize={30}
            onResize={(size: any) => {
              if (typeof size === "number") setSize(size)
            }}
          >
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">{Math.round(size)}%</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">{Math.round(100 - size)}%</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}


