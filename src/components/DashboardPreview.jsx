import { motion } from "framer-motion"
import { ChevronDown, ChevronRight, Search, Bell, Plus, MoreHorizontal, Home, ListChecks, ArrowLeftRight, CreditCard, Wallet, Landmark } from "lucide-react"

const sidebarItems = [
  { icon: Home, label: "Home", active: true },
  { icon: ListChecks, label: "Tasks", badge: "10" },
  { icon: ArrowLeftRight, label: "Transactions" },
  { icon: CreditCard, label: "Payments", chevron: true },
  { icon: CreditCard, label: "Cards" },
  { icon: Wallet, label: "Capital" },
  { icon: Landmark, label: "Accounts", chevron: true },
]

const workflowItems = ["Trake rutes", "Payments", "Notifications", "Settings"]

const actionButtons = [
  { label: "Send", accent: true },
  { label: "Request" },
  { label: "Transfer" },
  { label: "Deposit" },
  { label: "Pay Bill" },
  { label: "Create Invoice" },
]

const accounts = [
  { label: "Credit", value: "$98,125.50" },
  { label: "Treasury", value: "$6,750,200.00" },
  { label: "Operations", value: "$1,592,864.82" },
]

const transactions = [
  { date: "Sep 12", desc: "AWS", amount: "-$5,200", status: "Pending", color: "text-amber-600 bg-amber-50" },
  { date: "Sep 11", desc: "Client Payment", amount: "+$125,000", status: "Completed", color: "text-emerald-600 bg-emerald-50" },
  { date: "Sep 09", desc: "Payroll", amount: "-$85,450", status: "Completed", color: "text-emerald-600 bg-emerald-50" },
  { date: "Sep 08", desc: "Office Supplies", amount: "-$1,200", status: "Completed", color: "text-emerald-600 bg-emerald-50" },
]

function BalanceChart() {
  return (
    <svg viewBox="0 0 300 80" className="h-20 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(239 84% 67%)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="hsl(239 84% 67%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,60 C20,55 30,40 50,42 C70,44 80,20 100,22 C120,24 130,50 150,48 C170,46 180,15 200,18 C220,21 230,35 250,30 C270,25 280,10 300,8 L300,80 L0,80 Z"
        fill="url(#balanceFill)"
      />
      <path
        d="M0,60 C20,55 30,40 50,42 C70,44 80,20 100,22 C120,24 130,50 150,48 C170,46 180,15 200,18 C220,21 230,35 250,30 C270,25 280,10 300,8"
        fill="none"
        stroke="hsl(239 84% 67%)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="mt-8 w-full max-w-5xl"
    >
      <div
        className="rounded-2xl overflow-hidden p-3 md:p-4"
        style={{
          background: "rgba(255, 255, 255, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow: "var(--shadow-dashboard)",
        }}
      >
        <div className="rounded-xl bg-white overflow-hidden select-none pointer-events-none text-[11px] font-body">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-semibold">
                N
              </div>
              <span className="font-semibold text-foreground">Nexora</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </div>
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-border px-3 py-1 text-muted-foreground w-48">
              <Search className="h-3 w-3" />
              <span className="flex-1">Search</span>
              <span className="text-[9px] border border-border rounded px-1">⌘K</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary text-primary-foreground px-3 py-1 text-[10px] font-medium">
                Move Money
              </span>
              <Bell className="h-3.5 w-3.5 text-muted-foreground" />
              <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-[9px] font-semibold text-foreground">
                JB
              </div>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-40 border-r border-border p-3 hidden sm:block">
              <div className="space-y-0.5">
                {sidebarItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between rounded-md px-2 py-1.5 ${
                      item.active ? "bg-secondary text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-3 w-3" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="rounded-full bg-accent text-accent-foreground text-[9px] px-1.5">
                        {item.badge}
                      </span>
                    )}
                    {item.chevron && <ChevronRight className="h-3 w-3" />}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <span className="text-muted-foreground text-[10px] px-2">Workflows</span>
                <div className="space-y-0.5 mt-1">
                  {workflowItems.map((w) => (
                    <div key={w} className="px-2 py-1.5 text-muted-foreground">
                      {w}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 bg-secondary/30 p-4">
              <div className="text-sm font-semibold text-foreground mb-3">Welcome, Jane</div>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                {actionButtons.map((btn) => (
                  <span
                    key={btn.label}
                    className={`rounded-full px-3 py-1.5 text-[10px] font-medium ${
                      btn.accent
                        ? "bg-accent text-accent-foreground"
                        : "bg-white border border-border text-foreground"
                    }`}
                  >
                    {btn.label}
                  </span>
                ))}
                <span className="text-muted-foreground text-[10px] ml-1">Customize</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                {/* Balance card */}
                <div className="flex-1 basis-0 rounded-lg bg-white border border-border p-3">
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                    <span>Mercury Balance</span>
                    <span className="text-emerald-500">✓</span>
                  </div>
                  <div className="text-foreground font-semibold text-base">
                    $8,450,190.32
                    <span className="text-xs text-muted-foreground font-normal">.00</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-[10px]">
                    <span className="text-muted-foreground">Last 30 Days</span>
                    <span className="text-emerald-600">+$1.8M</span>
                    <span className="text-red-500">-$900K</span>
                  </div>
                  <BalanceChart />
                </div>

                {/* Accounts card */}
                <div className="flex-1 basis-0 rounded-lg bg-white border border-border p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-foreground font-medium">Accounts</span>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Plus className="h-3 w-3" />
                      <MoreHorizontal className="h-3 w-3" />
                    </div>
                  </div>
                  {accounts.map((acc) => (
                    <div key={acc.label} className="flex items-center justify-between py-3 text-xs">
                      <span className="text-muted-foreground">{acc.label}</span>
                      <span className="text-foreground font-medium">{acc.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transactions table */}
              <div className="rounded-lg bg-white border border-border p-3">
                <div className="text-foreground font-medium mb-2">Recent Transactions</div>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-muted-foreground text-left">
                      <th className="font-normal pb-2">Date</th>
                      <th className="font-normal pb-2">Description</th>
                      <th className="font-normal pb-2">Amount</th>
                      <th className="font-normal pb-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((t) => (
                      <tr key={t.desc} className="border-t border-border">
                        <td className="py-2 text-muted-foreground">{t.date}</td>
                        <td className="py-2 text-foreground">{t.desc}</td>
                        <td className="py-2 text-foreground">{t.amount}</td>
                        <td className="py-2">
                          <span className={`rounded-full px-2 py-0.5 ${t.color}`}>{t.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
