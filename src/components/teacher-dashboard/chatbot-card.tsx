"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChatbotOperations } from "@/components/teacher-dashboard/chatbot-operations"

async function copyToClipboard(value: string, meta?: Record<string, unknown>) {
  navigator.clipboard.writeText(value)
}

export function ChatbotCard({ chatbot }: any) {
  // const shareCode = `https://build.trypolymath.ai/embed/${chatbot.id}`
  const shareCode = `http://localhost:3000/student/chatbot/${chatbot.id}`

  return (
    <article className="border-primary flex rounded-md border-2 border-dashed">
      <div className="flex flex-1 flex-col justify-between">
        <div className="border-primary/10 grid grid-flow-col-dense grid-cols-3 border-l p-4 pb-0 text-left sm:border-l-transparent sm:p-6 sm:pb-0">
          <div className="col-span-2">
            <h2 className="font-cal text-xl font-bold capitalize sm:text-2xl">
              {chatbot.chatbotName}
            </h2>

            <p className="text-muted-foreground mt-1 text-base/relaxed leading-5 tracking-tight">
              {chatbot.description}
            </p>

            <div className="mt-5 flex gap-5">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Share</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Share Chatbot</DialogTitle>
                    <DialogDescription>
                      Copy the code below to share the chatbot with the
                      students.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col space-y-4">
                    <div className="w-[475px]">
                      <p className="mt-2 rounded-md bg-slate-50 p-4 opacity-90">
                        <code className="break-words">
                          <span>{shareCode}</span>
                        </code>
                      </p>
                    </div>
                    <Button
                      onClick={() => {
                        copyToClipboard(shareCode)
                        toast.info("Chatbot URL Copied!")
                      }}
                      className="w-full"
                    >
                      Copy Chatbot URL
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="col-span-1">
            <ChatbotOperations id={chatbot.id} />
          </div>
        </div>

        <div className="cursor-pointer sm:flex sm:items-end sm:justify-end">
          <Link href={`/teacher/chatbot/${chatbot.id}`}>
            <strong className="bg-primary text-background -mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-md rounded-ss-md px-3 py-2">
              <span className="font-cal text-[10px] tracking-wide sm:text-sm">
                Visit
              </span>
              <ExternalLink className="ml-1 h-4 w-4" />
            </strong>
          </Link>
        </div>
      </div>
    </article>
  )
}
