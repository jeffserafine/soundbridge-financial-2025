import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PartnersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">For CPAs and EAs</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A clean partnership workflow that supports your client relationships with clear communication and zero pressure.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>What you get</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Clean handoff process</p>
            <p>• Transparent updates at key milestones</p>
            <p>• Strategy-first conversations (not product pushing)</p>
            <p>• No client solicitation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How it works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>1) Quick intro</p>
            <p>2) Client discovery call</p>
            <p>3) Underwriting and implementation</p>
            <p>4) Ongoing servicing and annual reviews</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild>
          <a
            href="https://calendar.app.google/u9H9poH9AAr9ZJ2Z6"
            target="_blank"
            rel="noreferrer"
          >
            Schedule a partner call
          </a>
        </Button>

        <Button asChild variant="outline">
          <Link href="/contact">Send a message</Link>
        </Button>
      </div>
    </main>
  )
}
