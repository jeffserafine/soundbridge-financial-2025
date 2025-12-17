import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-tight">
          SoundBridge Financial
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/partners"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            For CPAs
          </Link>
          <Link
            href="/clients"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            For Individuals
          </Link>
          <Link
            href="/process"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Process
          </Link>

          <Button asChild variant="outline" size="sm" className="ml-2">
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
