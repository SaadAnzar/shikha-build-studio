import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/config/authOptions"
import TeacherChatbot from "@/components/teacher-dashboard/teacher-chatbot"

interface PageProps {
  params: {
    chatbotid: string
  }
}

export default async function Page({ params }: PageProps) {
  const { chatbotid } = params

  const session = await getServerSession(authOptions)

  if (session?.user?.role !== "teacher") {
    redirect("/")
  }

  return <TeacherChatbot chatbotid={chatbotid} />
}
