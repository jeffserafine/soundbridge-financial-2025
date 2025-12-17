import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* background polish */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-foreground/5 blur-3xl" />
        <div className="absolute -bottom-40 right-[-10rem] h-96 w-96 rounded-full bg-foreground/5 blur-3xl" />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground/60" />
          Independent strategies, clear process, no pressure
        </div>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
          Build better outcomes.
          <br />
          Protect what matters.
        </h1>

        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Life insurance and planning strategies built for real situations. Clear trade-offs, clean communication, and a
          process designed to feel calm, not salesy.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/contact">Start here</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/partners">For CPAs and EAs</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card className="transition hover:-translate-y-0.5 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-base">Client-first guidance</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Clear, honest trade-offs and a recommendation you can understand.
            </CardContent>
          </Card>

          <Card className="transition hover:-translate-y-0.5 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-base">Partner friendly</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              No client solicitation. Clean handoffs and milestone updates.
            </CardContent>
          </Card>

          <Card className="transition hover:-translate-y-0.5 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-base">Built for business owners</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Protection, key-person, retention strategies, and planning alignment.
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Card className="transition hover:-translate-y-0.5 hover:shadow-md">
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

          <Card className="transition hover:-translate-y-0.5 hover:shadow-md">
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
    </main>
  )
}