import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"

const contactPoints = [
  { icon: Mail, label: "hello@nexora.ai" },
  { icon: Phone, label: "+1 (415) 555-0132" },
  { icon: MapPin, label: "San Francisco, CA" },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout>
      <section className="px-6 md:px-12 lg:px-20 pt-16 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-5xl text-foreground tracking-tight max-w-xl"
        >
          Book a demo
        </motion.h1>
        <p className="mt-4 text-base text-muted-foreground max-w-[560px] leading-relaxed">
          Tell us a bit about your team and we'll set up a walkthrough tailored to your workflows.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 max-w-4xl">
          {submitted ? (
            <div className="rounded-2xl border border-border p-8">
              <p className="text-foreground font-medium">Thanks — we got it.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Someone from our team will reach out within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-foreground font-medium">Name</label>
                  <input
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Jane Bell"
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground font-medium">Work email</label>
                  <input
                    required
                    type="email"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-foreground font-medium">Company</label>
                <input
                  type="text"
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Acme Inc."
                />
              </div>
              <div>
                <label className="text-sm text-foreground font-medium">What would you like to automate?</label>
                <textarea
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                  placeholder="Tell us about your workflow..."
                />
              </div>
              <Button type="submit" size="lg" className="px-6 text-sm font-medium">
                Request demo
              </Button>
            </form>
          )}

          <div className="space-y-5">
            {contactPoints.map((c) => (
              <div key={c.label} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <c.icon className="h-4 w-4 text-foreground" />
                </div>
                <span className="text-sm text-foreground">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
