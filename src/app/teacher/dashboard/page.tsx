import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/config/authOptions"
import TeacherDashboard from "@/components/teacher-dashboard/teacher-dashboard"

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (session?.user?.role !== "teacher") {
    redirect("/")
  }

  return <TeacherDashboard />
}
