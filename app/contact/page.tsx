import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SCHEDULE_URL = "https://calendar.app.google/u9H9poH9AAr9ZJ2Z6"
const EMAIL = "info@soundbridgefinancial.com"

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Pick the option that fits. If you prefer email, you can message us directly.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Schedule a call</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Choose a time on our calendar.
            </p>
            <Button asChild>
              <Link href={SCHEDULE_URL} target="_blank" rel="noreferrer">
                Book a time
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send an email</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Email: <span className="font-medium text-foreground">{EMAIL}</span>
            </p>
<Button asChild variant="outline">
  <a
    href={`mailto:${EMAIL}?subject=${encodeURIComponent("SoundBridge inquiry")}`}
    target="_blank"
    rel="noreferrer"
  >
    Email us
  </a>
</Button>
<Button asChild variant="outline">
  <a
    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      EMAIL
    )}&su=${encodeURIComponent("SoundBridge inquiry")}`}
    target="_blank"
    rel="noreferrer"
  >
    Open in Gmail
  </a>
</Button>          
</CardContent>
        </Card>
      </div>
    </section>
  )
}
