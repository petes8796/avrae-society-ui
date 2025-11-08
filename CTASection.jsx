import ScrollReveal from './ScrollReveal';

export default function CTASection() {
  return (
    <section id="apply" className="section">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <ScrollReveal>
          <h3 className="font-serif text-3xl md:text-4xl text-cream mb-4">Membership by Invitation Only</h3>
          <p className="text-cream/70 max-w-2xl mx-auto">Submit your intent. We review each application discreetly. If aligned, you’ll receive a private link to proceed.</p>
          <div className="h-px w-40 mx-auto my-8 bg-gradient-to-r from-transparent via-royal/80 to-transparent" />
          <form className="mx-auto grid md:grid-cols-2 gap-3 max-w-2xl">
            <input className="bg-[#0c0c0c] border border-royal/25 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-1 focus:ring-royal/40" placeholder="Full Name" />
            <input className="bg-[#0c0c0c] border border-royal/25 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-1 focus:ring-royal/40" placeholder="Email" />
            <input className="md:col-span-2 bg-[#0c0c0c] border border-royal/25 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-1 focus:ring-royal/40" placeholder="Why do you want to join Avrae?" />
            <button type="button" className="md:col-span-2 px-6 py-3 rounded-full bg-jet text-cream border border-royal/40 hover:shadow-gold hover:-translate-y-[1px] active:translate-y-0 transition">Submit Application</button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
