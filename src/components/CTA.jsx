import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-12 backdrop-blur">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan-400/10 via-fuchsia-500/10 to-indigo-500/10" />
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative text-white text-2xl sm:text-4xl font-semibold tracking-tight"
          >
            Ready to publish onchain?
          </motion.h3>
          <p className="relative mt-3 text-slate-300/90 max-w-2xl">
            Spin up your publication, connect your wallet, and start building your onchain audience.
          </p>
          <div className="relative mt-6 flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20">Create publication</button>
            <button className="px-5 py-3 rounded-xl border border-white/20 bg-white/5 text-white">Join the community</button>
          </div>
        </div>
      </div>
    </section>
  );
}
