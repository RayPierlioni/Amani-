import { motion } from "motion/react";
import { ArrowLeft, Calendar, Crosshair, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function WesternMonteCristo() {
  return (
    <div className="pt-48 pb-40 px-8 min-h-screen bg-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <Link to="/productions" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-brand-muted hover:text-brand-accent transition-colors mb-20 group font-bold">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Back to Productions
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-brand-border" />
              <span className="text-brand-gold font-mono text-[9px] uppercase tracking-[0.4em] font-bold">Amani Ember Studios Original</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-[0.9] text-brand-accent italic">
              Count of <br />
              <span className="opacity-40">Monte Cristo</span> <br />
              <span className="text-brand-gold">Western</span>
            </h1>

            <div className="flex flex-wrap gap-10 font-mono text-[10px] uppercase tracking-[0.4em] text-brand-muted font-bold">
              <span className="flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full">
                <Sparkles className="w-3 h-3 text-brand-gold" /> AI Enhanced
              </span>
              <span className="flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full">
                <Calendar className="w-3 h-3 text-brand-gold" /> Post-Production
              </span>
              <span className="flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full">
                <MapPin className="w-3 h-3 text-brand-gold" /> American Frontier
              </span>
            </div>

            <p className="text-2xl text-brand-muted font-light leading-relaxed text-balance">
              A sweeping revenge story set in the brutal landscape of the American frontier, reimagining the classic tale through a cinematic AI lens.
            </p>
          </div>

          <div className="relative aspect-[3/4] group">
            <div className="absolute inset-0 border border-brand-gold/10 translate-x-6 translate-y-6 -z-0 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500" />
            <div className="relative z-10 w-full h-full overflow-hidden border border-brand-border cinematic-shadow bg-brand-light">
              <img 
                src="https://images.unsplash.com/photo-1533167649158-6d508895b680?auto=format&fit=crop&q=80&w=1200" 
                alt="The Count of Monte Cristo Western" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>

        {/* Synopsis Placeholder */}
        <div className="grid lg:grid-cols-3 gap-24 py-32 border-t border-brand-border">
          <div className="lg:col-span-2 flex flex-col gap-12">
            <h2 className="text-4xl font-display font-bold uppercase tracking-tight text-brand-accent">Synopsis</h2>
            <div className="flex flex-col gap-8 text-xl font-light text-brand-muted leading-relaxed">
              <p>
                In the untamed territory of the American West, a man is betrayed by those he trusted most and left for dead in a desolate canyon. Years later, he returns with a new identity and an unimaginable fortune, ready to systematically dismantle the lives of the men who destroyed his own.
              </p>
              <p>
                This production reinterprets Dumas's masterpiece as a gritty, atmospheric Western. Leveraging proprietary AI visualization, we capture the raw textures of silk and saddle leather, the blinding glare of the desert sun, and the deep shadows of frontier justice.
              </p>
              <p className="border-l-4 border-brand-gold pl-8 italic bg-brand-gold/5 py-10 text-brand-accent">
                "Justice is a cold wind blowing across the plains. Revenge is the fire that keeps a man alive through the winter."
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-brand-accent">Production Details</h3>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold">Studio</span>
                <span className="text-brand-accent uppercase font-display font-bold">Amani Ember Studios</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold">Genre</span>
                <span className="text-brand-accent uppercase font-display font-bold">Western / Revenge Epic</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold">Technology</span>
                <span className="text-brand-accent uppercase font-display font-bold">Neural Cinematic Engine v4</span>
              </div>
            </div>

            <div className="mt-12 p-8 bg-brand-accent text-white rounded-2xl flex flex-col gap-6 cinematic-shadow">
              <Crosshair className="w-8 h-8 text-brand-gold" />
              <p className="text-sm font-light leading-relaxed opacity-80">
                Currently in Post-Production. Our final color grading and AI-enhanced texture mapping are bringing the frontier to life in unprecedented detail.
              </p>
              <button className="w-full py-4 bg-brand-gold text-brand-accent font-display font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-colors rounded-full">
                Join the Watchlist
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
