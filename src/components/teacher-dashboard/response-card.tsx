"use client"

import { useState } from "react"
import Link from "next/link"
import { deleteDoc, doc } from "firebase/firestore"
import { ExternalLink, Loader, MoreVertical, Trash } from "lucide-react"
import { toast } from "sonner"

import { db } from "@/config/firebase"
import { cn } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

async function copyToClipboard(value: string, meta?: Record<string, unknown>) {
  navigator.clipboard.writeText(value)
}

export function ResponseCard({ response }: any) {
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false)
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false)

  // const shareCode = `https://build.trypolymath.ai/embed/${chatbot.id}`
  const shareCode = `http://localhost:3000/teacher/response/${response.id}`

  const deleteResponse = async (responseID: string) => {
    setIsDeleteLoading(true)
    try {
      await deleteDoc(doc(db, "responses", responseID))

      setIsDeleteLoading(false)
      setShowDeleteAlert(false)
      toast.success("Chatbot deleted successfully!")
      window.location.reload()
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    }
  }

  return (
    <article className="border-primary flex rounded-md border-2 border-dashed">
      <div className="flex flex-1 flex-col justify-between">
        <div className="border-primary/10 grid grid-flow-col-dense grid-cols-3 border-l p-4 pb-0 text-left sm:border-l-transparent sm:p-6 sm:pb-0">
          <div className="col-span-2">
            <h2 className="font-cal text-xl font-bold capitalize sm:text-2xl">
              {response?.student?.name}
            </h2>

            <p className="text-muted-foreground mt-1 text-base/relaxed font-semibold leading-5 tracking-tight">
              {response.chatbotDetails?.chatbotName}
            </p>
            <p className="text-muted-foreground mt-1 text-base/relaxed leading-5 tracking-tight">
              {response.chatbotDetails?.description}
            </p>

            <div className="mt-5 flex gap-5">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Share</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Share Response</DialogTitle>
                    <DialogDescription>
                      Copy the code below to share the response with the other
                      teachers.
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
                      Copy Response URL
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="col-span-1">
            <>
              <DropdownMenu>
                <DropdownMenuTrigger className="ml-auto flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-zinc-100">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">Open</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    className="text-destructive focus:text-destructive flex cursor-pointer items-center"
                    onSelect={() => setShowDeleteAlert(true)}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <AlertDialog
                open={showDeleteAlert}
                onOpenChange={setShowDeleteAlert}
              >
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to delete this project?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => deleteResponse(response.id)}
                      className={cn(
                        buttonVariants({ variant: "destructive" }),
                        "focus:outline-red-500 focus-visible:outline-red-500"
                      )}
                    >
                      {isDeleteLoading ? (
                        <Loader className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Trash className="mr-2 h-4 w-4" />
                      )}
                      <span>Delete</span>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          </div>
        </div>

        <div className="cursor-pointer sm:flex sm:items-end sm:justify-end">
          <Link href={`/teacher/response/${response.id}`}>
            <strong className="bg-primary text-background -mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-md rounded-ss-md px-3 py-2">
              <span className="font-cal text-[10px] tracking-wide sm:text-sm">
                Open
              </span>
              <ExternalLink className="ml-1 h-4 w-4" />
            </strong>
          </Link>
        </div>
      </div>
    </article>
  )
}
