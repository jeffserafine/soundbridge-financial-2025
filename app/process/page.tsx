import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    title: "Discovery",
    detail: "We listen first. You share your situation, goals, and what you want to protect.",
  },
  {
    title: "Assessment",
    detail: "We review needs, current coverage, and options. Clear explanations, no jargon.",
  },
  {
    title: "Recommendations",
    detail: "We present a simple plan with tradeoffs. You decide what fits.",
  },
  {
    title: "Implementation",
    detail: "We handle underwriting and paperwork. You stay informed at key milestones.",
  },
  {
    title: "Ongoing support",
    detail: "Annual reviews and servicing so your coverage stays aligned as life changes.",
  },
]

export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">The process</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Straightforward steps. Clear communication. No pressure.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {steps.map((s) => (
          <Card key={s.title}>
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {s.detail}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild>
          <a
            href="https://calendar.app.google/u9H9poH9AAr9ZJ2Z6"
            target="_blank"
            rel="noreferrer"
          >
            Schedule a call
          </a>
        </Button>

        <Button asChild variant="outline">
          <Link href="/clients">Explore client pathways</Link>
        </Button>
      </div>
    </main>
  )
}
