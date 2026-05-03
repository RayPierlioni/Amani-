import { motion } from "motion/react";
import { ArrowLeft, Calendar, User, Film, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function LastDragon() {
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
              The Last Dragon <br />
              <span className="opacity-40">Of Maine</span>
            </h1>

            <div className="flex flex-wrap gap-10 font-mono text-[10px] uppercase tracking-[0.4em] text-brand-muted font-bold">
              <span className="flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full">
                <Sparkles className="w-3 h-3 text-brand-gold" /> AI Feature Film
              </span>
              <span className="flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full">
                <Calendar className="w-3 h-3 text-brand-gold" /> Pre-Production
              </span>
              <span className="flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full">
                <MapPin className="w-3 h-3 text-brand-gold" /> Northern Maine
              </span>
            </div>

            <p className="text-2xl text-brand-muted font-light leading-relaxed text-balance">
              A grounded fantasy drama about childhood grief, found friendship, and the quiet magic surviving in forgotten places.
            </p>
          </div>

          <div className="relative aspect-[3/4] group">
            <div className="absolute inset-0 border border-brand-gold/10 translate-x-6 translate-y-6 -z-0 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500" />
            <div className="relative z-10 w-full h-full overflow-hidden border border-brand-border cinematic-shadow bg-brand-light">
              <img 
                src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200" 
                alt="The Last Dragon of Maine Poster" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>

        {/* Synopsis */}
        <div className="grid lg:grid-cols-3 gap-24 py-32 border-t border-brand-border">
          <div className="lg:col-span-2 flex flex-col gap-12">
            <h2 className="text-4xl font-display font-bold uppercase tracking-tight text-brand-accent">Synopsis</h2>
            <div className="flex flex-col gap-8 text-xl font-light text-brand-muted leading-relaxed">
              <p>
                After the loss of his mother, five-year-old Raymond is taken from New York City to live with his emotionally distant grandfather in a remote farmhouse in northern Maine. Surrounded by cold woods, muddy roads, and a family that does not know how to comfort him, Raymond feels more alone than ever — until he discovers something impossible hidden deep in the forest.
              </p>
              <p>
                Beneath the moss, stone, and shadow of the Maine woods lives an ancient dragon, a creature from the bedtime stories Raymond’s mother once told him. To the outside world, the dragon may look like a dangerous predator. To Raymond, it is something very different: proof that his mother’s stories were true, and that protectors still exist.
              </p>
              <p>
                As Raymond forms a secret bond with the dragon, his life begins to change. The bleak world around him slowly gains color again. He finds safety in the dragon, friendship with a curious girl named Amara, and a fragile new connection with the family he has left. But when fear, law enforcement, and adult desperation begin closing in, Raymond must protect the one being that helped him feel protected.
              </p>
              <p className="border-l-4 border-brand-gold pl-8 italic bg-brand-gold/5 py-10 text-brand-accent">
                "Set against the rugged beauty of coastal and northern Maine, The Last Dragon of Maine is an emotional journey about childhood grief, found friendship, family healing, and the quiet magic that can survive in forgotten places."
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
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold">Director</span>
                <span className="text-brand-accent uppercase font-display font-bold">Raymond Pierlioni</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold">Format</span>
                <span className="text-brand-accent uppercase font-display font-bold">Neural 8K / AI Enhanced Feature</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold">Themes</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Grief', 'Healing', 'Magic', 'Family', 'Maine'].map(t => (
                    <span key={t} className="px-3 py-1 bg-brand-light text-[9px] uppercase tracking-widest font-bold border border-brand-border">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-brand-accent text-white rounded-2xl flex flex-col gap-6 cinematic-shadow">
              <Film className="w-8 h-8 text-brand-gold" />
              <p className="text-sm font-light leading-relaxed opacity-80">
                Currently in Pre-Production. Our neural visualization phase is underway, capturing the atmospheric soul of forgotten Maine landscapes.
              </p>
              <button className="w-full py-4 bg-brand-gold text-brand-accent font-display font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-colors rounded-full">
                Get Updates
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
