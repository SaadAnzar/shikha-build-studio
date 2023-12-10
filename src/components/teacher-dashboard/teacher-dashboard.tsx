"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/vertical-tabs"
import Chatbots from "@/components/teacher-dashboard/chatbots"
import Responses from "@/components/teacher-dashboard/responses"

const TeacherDashboard = () => {
  return (
    <section className="h-full w-full py-8">
      <div className="container px-16">
        <Tabs defaultValue="chatbots" className="grid grid-cols-5 space-x-8">
          <div className="col-span-1">
            <div className="fixed h-screen w-[17%]">
              <TabsList className="flex flex-col">
                <TabsTrigger value="chatbots" className="py-2 text-lg">
                  Chatbots
                </TabsTrigger>
                <TabsTrigger value="responses" className="py-2 text-lg">
                  Responses
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <div className="col-span-4">
            <TabsContent value="chatbots">
              <Chatbots />
            </TabsContent>
            <TabsContent value="responses">
              <Responses />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default TeacherDashboard
