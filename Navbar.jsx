import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-royal/40 flex items-center justify-center">
            <span className="text-royal font-serif text-lg">A</span>
          </div>
          <span className="text-cream font-serif tracking-wide text-lg">AVRAE</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-cream/80">
          <a href="#features" className="hover:text-cream transition">Features</a>
          <a href="#membership" className="hover:text-cream transition">Membership</a>
          <a href="#events" className="hover:text-cream transition">Events</a>
          <a href="#concierge" className="hover:text-cream transition">Concierge</a>
        </nav>
        <a href="#apply" className="rounded-full px-4 py-2 text-sm border border-royal/40 text-cream/90 hover:text-cream hover:shadow-gold transition">Request Invite</a>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-royal/60 to-transparent" />
    </motion.header>
);
}
