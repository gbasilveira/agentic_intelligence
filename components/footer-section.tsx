export default function FooterSection() {
  return (
    <footer className="w-full bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center text-muted-foreground font-roboto">
        <p>&copy; {new Date().getFullYear()} Agentic Intelligence - Lisbon. All rights reserved.</p>
        <p className="mt-2 text-sm">
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>{" "}
          |{" "}
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  )
}
