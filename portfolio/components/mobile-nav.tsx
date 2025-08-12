"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <Link href="#about" className="text-lg hover:text-primary transition-colors" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link
            href="#experience"
            className="text-lg hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Experience
          </Link>
          <Link href="#skills" className="text-lg hover:text-primary transition-colors" onClick={() => setOpen(false)}>
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-lg hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link href="#contact" className="text-lg hover:text-primary transition-colors" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
