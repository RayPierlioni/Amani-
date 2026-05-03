import { Sparkles, Twitter, Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-32 px-8 border-t border-brand-border bg-white relative z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <Link to="/" className="flex flex-col">
            <span className="font-display font-bold text-2xl tracking-tighter uppercase leading-none text-brand-accent">Amani Ember</span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-brand-muted">Creative Production Studio</span>
          </Link>
          <p className="text-sm text-brand-muted max-w-sm leading-relaxed">
            Pioneering the intersection of narrative soul and generative intelligence. We build the cinematic future, one frame at a time.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-gold font-bold">Discover</span>
          <div className="flex flex-col gap-3 text-sm text-brand-muted uppercase tracking-[0.2em] font-medium">
            <Link to="/productions" className="hover:text-brand-accent transition-colors">Productions</Link>
            <Link to="/studio" className="hover:text-brand-accent transition-colors">Studio</Link>
            <Link to="/blog" className="hover:text-brand-accent transition-colors">The Chronicle</Link>
            <Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-gold font-bold">Follow</span>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-brand-border hover:border-brand-accent transition-all text-brand-muted hover:text-brand-accent">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-brand-border hover:border-brand-accent transition-all text-brand-muted hover:text-brand-accent">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-brand-border hover:border-brand-accent transition-all text-brand-muted hover:text-brand-accent">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[9px] uppercase tracking-[0.4em] text-brand-muted opacity-40">© 2024 Amani Ember Studios. All rights reserved.</p>
        <div className="flex gap-12 text-[9px] uppercase tracking-[0.4em] text-brand-muted opacity-40">
          <a href="#" className="hover:text-brand-accent transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};
