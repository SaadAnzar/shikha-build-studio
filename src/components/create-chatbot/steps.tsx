import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

import DataTab from "@/components/create-chatbot/steps/data"
import Details from "@/components/create-chatbot/steps/details"
import InputsAndPrompt from "@/components/create-chatbot/steps/inputs-prompt"
import ModelTab from "@/components/create-chatbot/steps/model"
import PropertiesTab from "@/components/create-chatbot/steps/properties"

export default function StepsBox() {
  const step = useSelector((state: RootState) => state.stepState.StepStage)

  return (
    <ol className="grid w-full grid-cols-1 divide-x-4 divide-gray-200 overflow-hidden rounded-full bg-black text-sm text-white sm:grid-cols-2">
      {step === 1 ? <Details active={true} /> : <Details active={false} />}
      {step === 2 ? (
        <InputsAndPrompt active={true} />
      ) : (
        <InputsAndPrompt active={false} />
      )}
    </ol>
  )
}

interface SidebarNavProps {
  activeTab: string
}

export function ChatbotStepsBox({ activeTab }: SidebarNavProps) {
  return (
    <ol className="grid w-full grid-cols-1 divide-x-4 divide-gray-200 overflow-hidden rounded-full bg-black px-2 text-sm text-white sm:grid-cols-3">
      <PropertiesTab active={activeTab == "properties"} />
      <DataTab active={activeTab == "data"} />
      <ModelTab active={activeTab == "model"} />
    </ol>
  )
}
