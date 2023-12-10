import { SlidersHorizontal } from "lucide-react"

export default function ModelTab({ active }: { active: boolean }) {
  return (
    <li className="flex items-center justify-center gap-2 p-4">
      {active ? (
        <div className="rounded-full bg-white p-2">
          <SlidersHorizontal className="shrink-0 text-black" />
        </div>
      ) : (
        <div className="rounded-full bg-zinc-500 p-2 opacity-[0.45]">
          <SlidersHorizontal className="shrink-0" />
        </div>
      )}

      <p>
        <strong className="font-cal mb-0.5 block text-lg font-bold leading-4">
          Model
        </strong>
        <small className="text-sm">
          Choose prompt and AI model for your chatbot
        </small>
      </p>
    </li>
  )
}
