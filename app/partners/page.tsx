import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const SCHEDULE_URL = "https://calendar.app.google/u9H9poH9AAr9ZJ2Z6"

export default function PartnersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">For CPAs and EAs</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A simple partnership workflow that helps you deliver more value to clients while keeping communication clean and your relationships protected.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>What you get</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc space-y-2 pl-5">
              <li>Clean handoff process with clear expectations</li>
              <li>Transparent updates at key milestones</li>
              <li>Strategy-first conversations, no pressure</li>
              <li>We do not solicit your clients</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How it works</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ol className="list-decimal space-y-2 pl-5">
              <li>Quick alignment call (your practice, your client types)</li>
              <li>Client discovery call with clear scope</li>
              <li>Underwriting and implementation, handled end to end</li>
              <li>Ongoing service and annual reviews</li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Best-fit cases</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc space-y-2 pl-5">
              <li>Business owner protection (key person, buy-sell funding)</li>
              <li>Executive retention and benefits strategies</li>
              <li>High-earning families with coverage gaps</li>
              <li>Existing policy reviews and cleanups</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Communication standards</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc space-y-2 pl-5">
              <li>You stay looped in at key milestones</li>
              <li>We confirm next steps in writing after calls</li>
              <li>We stay in our lane and coordinate with you</li>
              <li>Clients get clear explanations, no jargon</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-10" />

      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <a href={SCHEDULE_URL} target="_blank" rel="noreferrer">
            Schedule a partner call
          </a>
        </Button>

        <Button asChild variant="outline">
          <Link href="/contact">Send a message</Link>
        </Button>
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        SoundBridge provides insurance guidance and implementation support. We do not provide tax or legal advice.
      </p>
    </main>
  )
}
