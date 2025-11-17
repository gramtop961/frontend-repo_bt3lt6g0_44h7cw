import { motion } from "framer-motion";
import { PenSquare, Coins, Users, Sparkles } from "lucide-react";

const items = [
  {
    icon: PenSquare,
    title: "Composed writing",
    desc: "Create rich posts with blocks, embeds, and interactive components.",
    grad: "from-cyan-400/30 via-fuchsia-500/20 to-indigo-500/30",
  },
  {
    icon: Coins,
    title: "Crypto-native funding",
    desc: "Crowdfund, auctions, splits, and token launches built-in.",
    grad: "from-amber-300/30 via-rose-400/20 to-purple-500/30",
  },
  {
    icon: Users,
    title: "Communities",
    desc: "Token-gated access, memberships, and tiers with onchain claims.",
    grad: "from-emerald-300/30 via-cyan-400/20 to-sky-400/30",
  },
  {
    icon: Sparkles,
    title: "Ownership",
    desc: "Your content lives onchain — portable, composable, censorship-resistant.",
    grad: "from-fuchsia-400/30 via-cyan-400/20 to-indigo-400/30",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-4xl font-semibold tracking-tight text-white"
        >
          Everything you need to go onchain
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${it.grad} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="relative flex items-center gap-3 text-white">
                <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center border border-white/10">
                  <it.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="font-semibold">{it.title}</div>
              </div>
              <p className="relative mt-3 text-sm text-slate-300/90">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
