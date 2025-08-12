"use client"

import type React from "react"

interface GlassSectionProps {
  children: React.ReactNode
  className?: string
}

export function GlassSection({ children, className = "" }: GlassSectionProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl"></div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
