export default function Footer() {
  return (
    <footer className="border-t border-royal/20 py-6">
      <div className="mx-auto max-w-6xl px-5 flex items-center justify-between text-sm text-cream/60">
        <p>© {new Date().getFullYear()} AVRAE Society — All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-cream">Terms</a>
          <a href="#" className="hover:text-cream">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
