"use client"

import type React from "react"

import { Card } from "@/components/ui/card"

interface ShinyCardProps {
  children: React.ReactNode
  className?: string
}

export function ShinyCard({ children, className = "" }: ShinyCardProps) {
  return (
    <div className="group relative">
      {/* Shiny border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

      {/* Main card */}
      <Card
        className={`relative bg-gradient-to-br from-slate-900/90 to-blue-950/90 border-slate-700/50 backdrop-blur-sm ${className}`}
      >
        {children}
      </Card>
    </div>
  )
}
