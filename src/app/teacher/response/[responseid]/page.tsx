import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/config/authOptions"
import TeacherResponseView from "@/components/teacher-dashboard/teacher-response"

interface PageProps {
  params: {
    responseid: string
  }
}

export default async function Page({ params }: PageProps) {
  const { responseid } = params

  const session = await getServerSession(authOptions)

  if (session?.user?.role !== "teacher") {
    redirect("/")
  }

  return <TeacherResponseView responseid={responseid} />
}
