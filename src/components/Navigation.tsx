import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 pointer-events-none transition-all duration-500">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`max-w-5xl mx-auto flex justify-between items-center px-8 py-3 transition-all duration-700 pointer-events-auto rounded-full ${
          scrolled 
            ? 'bg-white/40 backdrop-blur-3xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.1)] border border-brand-accent/5' 
            : 'bg-white/10 backdrop-blur-xl border border-white/10'
        }`}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tighter uppercase leading-none text-brand-accent">Amani Ember</span>
            <span className="text-[7px] uppercase tracking-[0.5em] font-mono text-brand-muted opacity-60 group-hover:opacity-100 transition-opacity">Studios // Vision</span>
          </div>
        </Link>

        <div className="hidden md:flex gap-10 font-display text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent/60">
          <Link to="/productions" className="hover:text-brand-accent transition-colors relative group">
            Productions
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all group-hover:w-full" />
          </Link>
          <Link to="/studio" className="hover:text-brand-accent transition-colors relative group">
            Studio
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all group-hover:w-full" />
          </Link>
          <Link to="/blog" className="hover:text-brand-accent transition-colors relative group">
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all group-hover:w-full" />
          </Link>
          <Link to="/contact" className="hover:text-brand-accent transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all group-hover:w-full" />
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-brand-accent p-2">
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-brand-light z-[105] p-12 flex flex-col items-center justify-center gap-12 md:hidden"
          >
            <div className="absolute top-12 right-12">
              <button onClick={() => setIsOpen(false)} className="text-brand-accent p-3 border border-brand-border rounded-full hover:bg-white transition-all shadow-sm">
                <X className="w-8 h-8" />
              </button>
            </div>
            <Link onClick={() => setIsOpen(false)} to="/productions" className="font-display font-medium uppercase tracking-[0.5em] text-xl hover:text-brand-gold text-brand-accent transition-colors">Productions</Link>
            <Link onClick={() => setIsOpen(false)} to="/studio" className="font-display font-medium uppercase tracking-[0.5em] text-xl hover:text-brand-gold text-brand-accent transition-colors">Studio</Link>
            <Link onClick={() => setIsOpen(false)} to="/blog" className="font-display font-medium uppercase tracking-[0.5em] text-xl hover:text-brand-gold text-brand-accent transition-colors">Blog</Link>
            <Link onClick={() => setIsOpen(false)} to="/contact" className="font-display font-medium uppercase tracking-[0.5em] text-xl hover:text-brand-gold text-brand-accent transition-colors">Contact</Link>
          </motion.div>
        )}
      </motion.div>
    </nav>
  );
};
