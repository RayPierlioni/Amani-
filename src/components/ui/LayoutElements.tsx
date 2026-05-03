import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const SectionHeader = ({ title, label }: { title: string; label: string }) => (
  <div className="flex flex-col gap-4 mb-20">
    <div className="flex items-center gap-4">
      <div className="w-12 h-px bg-brand-border" />
      <span className="text-brand-muted font-mono text-[9px] uppercase tracking-[0.4em] font-bold">{label}</span>
    </div>
    <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-none italic text-brand-accent">{title}</h2>
  </div>
);

export const ProductionCard = ({ title, status, image, description, slug = "#" }: { title: string; status: string; image: string; description: string; slug?: string }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="group relative flex flex-col bg-white border border-brand-border overflow-hidden cinematic-shadow"
  >
    <div className="aspect-[4/5] overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
      
      <div className="absolute top-6 right-6">
        <Link 
          to={`/productions/${slug}`} 
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-md border border-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 hover:bg-brand-accent hover:text-white"
        >
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </div>

    <div className="p-10 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-brand-muted font-mono text-[9px] uppercase tracking-[0.4em]">{status}</span>
        <h3 className="text-3xl font-display font-bold tracking-tight uppercase leading-none text-brand-accent group-hover:text-brand-gold transition-colors">{title}</h3>
      </div>
      <p className="text-sm text-brand-muted leading-relaxed font-light line-clamp-2">{description}</p>
    </div>
  </motion.div>
);
