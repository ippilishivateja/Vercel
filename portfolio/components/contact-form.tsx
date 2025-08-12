"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShinyCard } from "./shiny-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <ShinyCard className="w-full max-w-md mx-auto">
        <CardContent className="flex flex-col items-center justify-center p-8">
          <CheckCircle className="h-16 w-16 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">Message Sent!</h3>
          <p className="text-blue-200 text-center">Thank you for reaching out. I'll get back to you soon!</p>
        </CardContent>
      </ShinyCard>
    )
  }

  return (
    <ShinyCard className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Mail className="h-5 w-5" />
          Send me a message
        </CardTitle>
        <CardDescription className="text-blue-200">
          I'd love to hear from you. Send me a message and I'll respond as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-blue-200">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="bg-slate-800/50 border-slate-600 text-white placeholder:text-blue-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-blue-200">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              className="bg-slate-800/50 border-slate-600 text-white placeholder:text-blue-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-blue-200">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder="What's this about?"
              required
              className="bg-slate-800/50 border-slate-600 text-white placeholder:text-blue-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-blue-200">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              className="bg-slate-800/50 border-slate-600 text-white placeholder:text-blue-300 min-h-[100px]"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </ShinyCard>
  )
}
