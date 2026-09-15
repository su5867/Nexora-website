import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Link } from "react-router-dom"
import Layout from "@/components/Layout"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Try Nexora with a single workflow and a small team.",
    features: ["1 active agent", "500 tasks / month", "Community support", "Core integrations"],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$79",
    period: "per month",
    description: "For teams automating the busywork across departments.",
    features: [
      "10 active agents",
      "25,000 tasks / month",
      "Priority support",
      "All integrations",
      "Custom workflows",
    ],
    cta: "Book a demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "billed annually",
    description: "Dedicated infrastructure, security review, and SSO.",
    features: [
      "Unlimited agents",
      "Unlimited tasks",
      "Dedicated success manager",
      "SSO & audit logs",
      "Custom SLAs",
    ],
    cta: "Talk to sales",
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <Layout>
      <section className="px-6 md:px-12 lg:px-20 pt-16 pb-8">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-5xl text-foreground tracking-tight max-w-xl"
        >
          Pricing that scales with your team
        </motion.h1>
        <p className="mt-4 text-base text-muted-foreground max-w-[600px] leading-relaxed">
          Start free, then pay for the automation you actually use. No setup fees, cancel anytime.
        </p>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-2xl border p-6 flex flex-col",
                plan.highlighted
                  ? "border-accent bg-accent/5 shadow-[0_20px_60px_-20px_rgba(79,70,229,0.25)]"
                  : "border-border bg-background"
              )}
            >
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-display text-4xl text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={cn(
                  buttonVariants({ variant: plan.highlighted ? "default" : "outline", size: "default" }),
                  "mt-6 w-full text-sm font-medium"
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
