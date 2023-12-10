import Link from "next/link"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/config/authOptions"
import { buttonVariants } from "@/components/ui/button"
import LoginButton from "@/components/login-button"

export default async function IndexPage() {
  const session = await getServerSession(authOptions)

  // if (session?.user?.role === "student") redirect("/student/chatbot/1")

  return (
    <section className="h-full w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="bg-gradient-to-r from-white to-gray-900 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
                Shikha Build Studio
              </h1>
              <p className="mx-auto max-w-[600px] md:text-xl">
                Use this to make your development easy.
                <br />
                Fast, secure, and modern.
              </p>
            </div>
            {!session && (
              <div className="mx-auto w-full max-w-sm space-y-2">
                <LoginButton />
              </div>
            )}
            {session?.user?.role === "creator" && (
              <div className="mx-auto w-full max-w-sm space-y-4">
                <div className="mx-auto flex h-10 w-[80%] items-center justify-center rounded-md bg-zinc-200 text-center text-lg font-medium">
                  You are signed in as a Creator!
                </div>
                <Link
                  href="/creator/create-chatbot"
                  className={buttonVariants()}
                >
                  Create Chatbot
                </Link>
              </div>
            )}
            {session?.user?.role === "teacher" && (
              <div className="mx-auto w-full max-w-sm space-y-4">
                <div className="mx-auto flex h-10 w-[80%] items-center justify-center rounded-md bg-zinc-200 text-center text-lg font-medium">
                  You are signed in as a Teacher!
                </div>
                <Link href="/teacher/dashboard" className={buttonVariants()}>
                  Visit Dashboard
                </Link>
              </div>
            )}
            {session?.user?.role === "student" && (
              <div className="mx-auto w-full max-w-sm space-y-4">
                <div className="mx-auto flex h-10 w-[80%] items-center justify-center rounded-md bg-zinc-200 text-center text-lg font-medium">
                  You are signed in as a Student!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
