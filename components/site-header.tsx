import Link from "next/link"
import { Button } from "@/components/ui/button"
const SCHEDULE_URL = "https://calendar.app.google/u9H9poH9AAr9ZJ2Z6"

export default function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-semibold">
          SoundBridge Financial
        </Link>

        <nav className="flex items-center gap-2">
          <Link href="/partners" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
            For CPAs
          </Link>
          <Link href="/clients" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
            For Individuals
          </Link>
          <Link href="/process" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
            Process
          </Link>
          <Link href="/contact" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>

          <Button asChild variant="outline" size="sm">
            <Link href="/partners">Partner</Link>
          </Button>
          <Button asChild size="sm">
            <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">
              Schedule
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}