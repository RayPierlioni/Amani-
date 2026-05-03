import { motion } from "motion/react";
import { SectionHeader, ProductionCard } from "../components/ui/LayoutElements";
import { FilmIcon } from "lucide-react";

export default function Productions() {
  const allProductions = [
    {
      title: "The Last Dragon of Maine",
      status: "Pre-Production",
      image: "/last_dragon_poster.png.png",
      description: "A grounded fantasy drama about childhood grief, found friendship, and the quiet magic surviving in forgotten places.",
      slug: "last-dragon"
    },
    {
      title: "The Count of Monte Cristo Western",
      status: "Post-Production",
      image: "https://images.unsplash.com/photo-1533167649158-6d508895b680?auto=format&fit=crop&q=80&w=1200",
      description: "A sweeping revenge story set in the brutal landscape of the American frontier.",
      slug: "western-monte-cristo"
    }
  ];

  return (
    <div className="pt-48 pb-40 px-8 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          label="The Library" 
          title="Archive // Future" 
        />

        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          {allProductions.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <ProductionCard {...p} />
            </motion.div>
          ))}
        </div>

        <section className="mt-64 pt-32 border-t border-brand-border">
           <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div className="flex flex-col gap-12">
                <h3 className="text-5xl font-display font-medium uppercase tracking-tighter italic text-brand-accent">Process / Protocol</h3>
                <p className="text-2xl text-brand-muted font-light leading-relaxed max-w-xl text-balance">
                  Every Amani Ember production begins with the Written Word. We synthesize traditional narrative structure with neural visualization to create something entirely new yet deeply familiar.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-brand-accent">
                   <div className="flex flex-col gap-4">
                      <span className="font-display text-4xl italic font-light opacity-20">01</span>
                      <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-brand-accent font-bold">Genesis</span>
                      <p className="text-xs text-brand-muted leading-relaxed font-light">Resonant writing and thematic development.</p>
                   </div>
                   <div className="flex flex-col gap-4">
                      <span className="font-display text-4xl italic font-light opacity-20">02</span>
                      <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-brand-accent font-bold">Synthesis</span>
                      <p className="text-xs text-brand-muted leading-relaxed font-light">Neural-guided visual architecture and world building.</p>
                   </div>
                   <div className="flex flex-col gap-4">
                      <span className="font-display text-4xl italic font-light opacity-20">03</span>
                      <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-brand-accent font-bold">Refinement</span>
                      <p className="text-xs text-brand-muted leading-relaxed font-light">Symphonic sound and cinematic polish.</p>
                   </div>
                </div>
              </div>
              <div className="w-full aspect-[4/3] bg-brand-light border border-brand-border flex flex-col items-center justify-center group overflow-hidden relative">
                 <FilmIcon className="w-20 h-20 text-brand-accent opacity-5 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110" />
                 <span className="absolute bottom-10 font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted">Studio Insight / Coming Soon</span>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
