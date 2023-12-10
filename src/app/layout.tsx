import "./globals.css"
import { Metadata, Viewport } from "next"
import { Toaster } from "sonner"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SessionProvider } from "@/components/session-provider"

import Navbar from "../components/nav-bar"

export const metadata: Metadata = {
  title: {
    default: "Anzar",
    template: `%s - Anzar`,
  },
  description: "Md Anzar Ahmad is a full stack developer.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <SessionProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Toaster richColors />
            </div>
          </SessionProvider>
        </body>
      </html>
    </>
  )
}
