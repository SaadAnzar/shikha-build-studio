import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/config/authOptions"
import StudentChatbot from "@/components/student-chatbot/student-chatbot"
import StudentLoginModal from "@/components/student-chatbot/student-login-modal"

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = params

  const session = await getServerSession(authOptions)

  if (!session) return <StudentLoginModal />

  if (session?.user?.role !== "student") {
    redirect("/")
  }

  return <StudentChatbot id={id} />
}
