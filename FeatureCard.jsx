import ScrollReveal from './ScrollReveal';

export default function FeatureCard({ title, desc }) {
  return (
    <ScrollReveal>
      <div className="border border-royal/25 rounded-2xl p-6 bg-[#0c0c0c]/60 hover:bg-[#0c0c0c]/80 transition">
        <h3 className="font-serif text-cream text-xl mb-2">{title}</h3>
        <p className="text-cream/70 text-sm leading-relaxed">{desc}</p>
      </div>
    </ScrollReveal>
  );
}
