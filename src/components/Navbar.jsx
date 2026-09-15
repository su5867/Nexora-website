import { Link, NavLink } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body shrink-0">
      <Link to="/" className="text-xl font-semibold tracking-tight text-foreground">
        ✦ Nexora
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <Link
        to="/contact"
        className={cn(buttonVariants({ size: "default" }), "px-5 text-sm font-medium")}
      >
        Book a demo
      </Link>
    </nav>
  )
}
