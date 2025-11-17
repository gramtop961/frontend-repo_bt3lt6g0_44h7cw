import { Menu, PenSquare, Wallet, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="w-full sticky top-0 backdrop-blur-md bg-white/5 supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-white"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-indigo-500 p-[1px]">
            <div className="h-full w-full rounded-[7px] bg-slate-900/80 grid place-items-center">
              <Sparkles className="h-4 w-4 text-cyan-300" />
            </div>
          </div>
          <span className="font-semibold tracking-tight">MirrorX</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-200/90">
          <a href="#features" className="hover:text-white transition-colors">Explore</a>
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm transition-colors">
            <PenSquare className="h-4 w-4" />
            Start writing
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 text-slate-900 font-semibold text-sm shadow-lg shadow-cyan-500/20">
            <Wallet className="h-4 w-4" />
            Connect
          </button>
          <button className="md:hidden inline-flex items-center justify-center p-2 text-white/80 hover:text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
