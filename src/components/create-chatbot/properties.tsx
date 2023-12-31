"use client"

import Image from "next/image"
import { ImageIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

interface PropertiesProps {
  imagePreview: string
  setImagePreview: React.Dispatch<React.SetStateAction<string>>
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  welcomeMessage: string
  setWelcomeMessage: React.Dispatch<React.SetStateAction<string>>
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
}

const Properties = ({
  imagePreview,
  setImagePreview,
  name,
  setName,
  welcomeMessage,
  setWelcomeMessage,
  description,
  setDescription,
}: PropertiesProps) => {
  const handleImageUpload = (event: any) => {
    const selectedImage = event.target.files[0]
    if (selectedImage) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(selectedImage)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="px-6 pt-4 text-3xl font-semibold">Chatbot Properties</h1>

      <Card className="mx-5">
        <CardHeader className="space-y-0 pb-4">
          <CardTitle className="font-cal text-xl tracking-normal">
            Chatbot Icon
            <span className="ml-3 text-sm font-medium text-gray-400">
              (Optional)
            </span>
          </CardTitle>
          <CardDescription className="text-sm text-black/60">
            Upload an image to use as your chatbot icon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-flow-col-dense grid-cols-3 justify-between gap-5">
            <Input
              className="col-span-2"
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
            />

            <div className="col-span-1">
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Selected Image"
                  width={60}
                  height={60}
                  className="mx-auto rounded-full"
                />
              ) : (
                <ImageIcon
                  color="black"
                  size={60}
                  className="mx-auto rounded-2xl border-2 border-zinc-300 bg-zinc-100 p-3"
                />
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mx-5">
        <CardHeader className="space-y-0 pb-4">
          <CardTitle className="font-cal text-xl tracking-normal">
            Chatbot Name
          </CardTitle>
          <CardDescription className="text-sm text-black/60">
            Name for your chatbot.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Please enter a name for your chatbot."
          />
        </CardContent>
      </Card>

      <Card className="mx-5">
        <CardHeader className="space-y-0 pb-4">
          <CardTitle className="font-cal text-xl tracking-normal">
            Welcome Message
          </CardTitle>
          <CardDescription className="text-sm text-black/60">
            Welcome message for your chatbot.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            value={welcomeMessage}
            onChange={(e) => setWelcomeMessage(e.target.value)}
            placeholder="Hello, how can I help you today?"
          />
        </CardContent>
      </Card>

      <Card className="mx-5">
        <CardHeader className="space-y-0 pb-4">
          <CardTitle className="font-cal text-xl tracking-normal">
            Description
            <span className="ml-3 text-base font-medium text-gray-400">
              (Optional)
            </span>
          </CardTitle>
          <CardDescription className="text-sm text-black/60">
            Description for your chatbot.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Please enter a description for your chatbot."
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default Properties
