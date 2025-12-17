import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">
        Build better outcomes. Protect what matters.
      </h1>

      <p className="mt-4 max-w-2xl text-muted-foreground">
        A clean, modern site starter. If you can see this styled, Next.js + Tailwind + shadcn are fully working.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>For CPAs and EAs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Partnership workflow, clean handoffs, client-first strategy.
            </p>
            <Button asChild variant="outline">
              <Link href="/partners">View partner model</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>For individuals and families</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Life insurance and planning strategies without the sales pressure.
            </p>
            <Button asChild>
              <Link href="/clients">Explore options</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}