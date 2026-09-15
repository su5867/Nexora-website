import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 font-body">{children}</main>
      <Footer />
    </div>
  )
}
