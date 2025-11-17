import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            The onchain publishing platform
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight text-white">
            Publish, fund, and grow your ideas onchain
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-200/90 max-w-2xl">
            A modern Web3-native writing platform inspired by Mirror — create posts, crowdfund, launch tokens, and build communities with built-in crypto rails.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20">Create publication</button>
            <button className="px-5 py-3 rounded-xl border border-white/20 bg-white/5 text-white">Explore publications</button>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-200/80">
            <Stat k="2.3k" v="Creators" />
            <Stat k="$1.8M" v="Raised" />
            <Stat k="12k" v="Collectors" />
            <Stat k="8.4k" v="Publications" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ k, v }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-2xl font-semibold text-white">{k}</div>
      <div className="text-xs text-slate-300/80">{v}</div>
    </div>
  );
}
