import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Building2,
  Sparkles,
  CheckCircle2,
} from "lucide-react"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/20 to-transparent blur-3xl" />
          <div className="absolute bottom-[-260px] right-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--border))_1px,transparent_0)] [background-size:18px_18px] opacity-40" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Independent strategies, clear process, no pressure
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Build better outcomes.
            <span className="block text-primary">Protect what matters.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            SoundBridge delivers life insurance and planning strategies built for real situations.
            We support individuals and families, and we partner with CPAs and EAs to expand client value cleanly.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Start here <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/partners">For CPAs and EAs</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-xl border bg-background/60 p-4 backdrop-blur">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <div className="text-sm">
                <div className="font-medium">Client-first guidance</div>
                <div className="text-muted-foreground">Clear, honest trade-offs</div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border bg-background/60 p-4 backdrop-blur">
              <Users className="h-5 w-5 text-primary" />
              <div className="text-sm">
                <div className="font-medium">Partner friendly</div>
                <div className="text-muted-foreground">No client solicitation</div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border bg-background/60 p-4 backdrop-blur">
              <Building2 className="h-5 w-5 text-primary" />
              <div className="text-sm">
                <div className="font-medium">Built for business owners</div>
                <div className="text-muted-foreground">Protection + planning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Choose your pathway</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Two clear entry points. Same philosophy: clarity, coordination, and outcomes.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card className="group overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>For CPAs and EAs</span>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Clean handoffs, transparent updates, and a strategy-first approach that supports your client relationships.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  Business owner protection and advanced planning
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  Clear communication at key milestones
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  We stay in our lane and coordinate with you
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link href="/partners">View partner model</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>For individuals and families</span>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Coverage and strategies that match your reality, explained in plain language, without sales pressure.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  Coverage gap review and needs analysis
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  Business owner and high earner strategies
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  Ongoing service, not a one-time transaction
                </li>
              </ul>
              <Button asChild>
                <Link href="/clients">Explore options</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Simple process. Clear steps.</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          No jargon, no pressure. Just a straightforward way to get the right strategy in place.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { n: "1", t: "Discovery", d: "Understand your situation and goals." },
            { n: "2", t: "Assessment", d: "Identify gaps and possible strategies." },
            { n: "3", t: "Recommendation", d: "Clear options with honest trade-offs." },
            { n: "4", t: "Implementation", d: "We handle the heavy lifting end to end." },
          ].map((s) => (
            <Card key={s.n}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-muted text-sm font-semibold">
                    {s.n}
                  </div>
                  <div className="font-semibold">{s.t}</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/process">See the full process</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-2xl border bg-muted p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-emerald-500/10" />
          <div className="relative">
            <h3 className="text-2xl font-semibold tracking-tight">
              Ready to take the next step?
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Book a time or send a message. We’ll keep it simple and get you clear next steps.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact options <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/partners">CPA and EA partners</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
