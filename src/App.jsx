import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background accents */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[80vw] rounded-full blur-3xl opacity-30 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-indigo-500/20" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <CTA />

      <footer className="py-12 border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-300/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} MirrorX — built for modern onchain creators.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App