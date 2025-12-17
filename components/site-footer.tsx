export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col gap-2">
          <p>© {new Date().getFullYear()} SoundBridge Financial.</p>
          <p>Licensed insurance professional. Not a CPA or attorney.</p>
        </div>
      </div>
    </footer>
  )
}