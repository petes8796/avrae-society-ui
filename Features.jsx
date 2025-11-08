import FeatureCard from './FeatureCard';
import ScrollReveal from './ScrollReveal';

const items = [
  { title: 'AI Voice Concierge', desc: 'Speak your request. Consider it done — travel, tables, introductions.' },
  { title: 'Curated Deal Flow', desc: 'Private investments and partnerships from a vetted inner circle.' },
  { title: 'Invite‑Only Events', desc: 'Intimate salons and retreats in Dubai, London, Singapore, NYC.' },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="mx-auto max-w-6xl px-5">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-cream gold-underline">What You Unlock</h2>
            <div className="hidden md:block w-40 h-px bg-gradient-to-r from-transparent via-royal/80 to-transparent" />
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => <FeatureCard key={i} title={it.title} desc={it.desc} />)}
        </div>
      </div>
    </section>
  );
}
