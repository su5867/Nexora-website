import { motion } from "framer-motion"

const stats = [
  { value: "40M+", label: "tasks automated" },
  { value: "1,200+", label: "teams on Nexora" },
  { value: "98%", label: "customer retention" },
]

const team = [
  { name: "Alina Cho", role: "Co-founder & CEO" },
  { name: "David Mensah", role: "Co-founder & CTO" },
  { name: "Priya Raman", role: "Head of Product" },
  { name: "Tomas Weber", role: "Head of Engineering" },
]

import Layout from "@/components/Layout"

export default function About() {
  return (
    <Layout>
      <section className="px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-5xl text-foreground tracking-tight max-w-xl"
        >
          We build agents that do the work nobody wants to
        </motion.h1>
        <p className="mt-4 text-base text-muted-foreground max-w-[620px] leading-relaxed">
          Nexora started in 2023 with a simple observation: most of a team's week goes to work that isn't
          actually the job. We build agents that learn a process once, then run it reliably—so people can
          get back to the parts of their work that need a human.
        </p>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl border-t border-border pt-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl text-foreground">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-20 border-t border-border pt-12">
        <h2 className="font-display text-2xl text-foreground mb-6">Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
          {team.map((member) => (
            <div key={member.name}>
              <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-foreground mb-3">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="text-sm font-medium text-foreground">{member.name}</div>
              <div className="text-sm text-muted-foreground">{member.role}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
