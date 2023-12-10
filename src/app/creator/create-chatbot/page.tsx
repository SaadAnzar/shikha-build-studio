import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/config/authOptions"
import CreateChatbot from "@/components/create-chatbot/create-chatbot"

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (session?.user?.role !== "creator") {
    redirect("/")
  }

  return <CreateChatbot />
}
