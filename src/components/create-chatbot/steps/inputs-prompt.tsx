import { LayoutList } from "lucide-react"

export default function InputsAndPrompt({ active }: { active: boolean }) {
  return (
    <li className="flex items-center justify-center gap-2 p-4">
      {active ? (
        <div className="rounded-full bg-white p-2">
          <LayoutList className="shrink-0 text-black" />
        </div>
      ) : (
        <div className="rounded-full bg-zinc-500 p-2 opacity-[0.45]">
          <LayoutList className="shrink-0" />
        </div>
      )}

      <p>
        <strong className="font-cal mb-0.5 block text-lg font-bold leading-4">
          Inputs & Prompt
        </strong>
        <small className="text-sm">Inputs and Prompt for the application</small>
      </p>
    </li>
  )
}
