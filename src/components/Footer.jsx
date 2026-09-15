import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-20 py-10 font-body">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
          ✦ Nexora
        </Link>
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Nexora, Inc.</p>
      </div>
    </footer>
  )
}
