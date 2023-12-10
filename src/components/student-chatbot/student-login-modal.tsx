"use client"

import { useState } from "react"

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import LoginButton from "../login-button"

const StudentLoginModal = () => {
  const [open, setOpen] = useState(true)

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {/* <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Login</AlertDialogTitle>
          <AlertDialogDescription>
            Please login to be able to converse with the chatbot.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <LoginButton />

        {/* <AlertDialogFooter>
            <AlertDialogAction
              onClick={() =>
                console.log("email: ", email)
              }
            >
              Enter
            </AlertDialogAction>
            
          </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default StudentLoginModal
