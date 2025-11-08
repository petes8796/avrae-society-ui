import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-hero min-h-[90vh] flex items-center" id="home">
      <div className="mx-auto max-w-6xl px-5 pt-28 md:pt-36">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-royal/80 uppercase tracking-[0.3em] text-xs mb-6">Private Access. Infinite Power.</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="font-serif text-4xl md:text-6xl leading-tight text-cream gold-underline">The Digital Society for the World’s Elite</motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35 }} className="text-cream/70 mt-6 max-w-2xl">Discreet connections, curated capital, and a concierge that moves the world for you.</motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }} className="mt-10 flex items-center gap-4">
          <a href="#apply" className="px-6 py-3 rounded-full bg-jet text-cream border border-royal/40 hover:shadow-gold hover:-translate-y-[1px] active:translate-y-0 transition will-change-transform">Request Invitation</a>
          <a href="#learn" className="text-cream/70 hover:text-cream transition">Learn More</a>
        </motion.div>
      </div>
    </section>
);
}
