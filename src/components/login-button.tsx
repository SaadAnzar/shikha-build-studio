"use client"

import { ArrowRight } from "lucide-react"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"

const LoginButton = () => {
  return (
    <Button onClick={() => signIn("google")}>
      Get Started
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}

export default LoginButton
