import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ClientsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">For Individuals and Families</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Protection and planning built around real life. Clear options, clean process, and a recommendation you can
        explain to your future self.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Coverage strategy</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Right-size coverage for your goals, timelines, and budget.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Family protection</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Income replacement, debt payoff, education, and legacy planning support.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Business owner needs</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Key person, buy-sell funding, executive retention, and benefit strategies.
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/contact">Talk through your situation</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/process">See the process</Link>
        </Button>
      </div>
    </main>
  )
}
