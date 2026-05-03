import { motion } from "motion/react";
import { Ghost, Sparkles, Film, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../components/ui/LayoutElements";

export default function Studio() {
  return (
    <div className="pt-48 pb-40 px-8 min-h-screen bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          label="The Studio" 
          title="Studio // Vision" 
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-48">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square relative flex items-center justify-center bg-white border border-brand-border overflow-hidden group cinematic-shadow"
          >
            <div className="absolute inset-0 border border-brand-gold/10 translate-x-6 translate-y-6 -z-10 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500" />
            
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <Ghost className="w-80 h-80 text-brand-accent blur-[2px]" />
            </motion.div>

            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-8 border-l-4 border-brand-accent shadow-xl">
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-gold font-bold">Director</span>
              <p className="font-display font-bold text-3xl uppercase italic leading-none mt-1">Raymond Pierlioni</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h3 className="text-4xl md:text-6xl font-display font-medium tracking-tighter leading-[0.9] text-brand-accent uppercase">
                Award-Winning <br />
                <span className="font-serif italic text-brand-gold font-light">Visionary Mastery</span>
              </h3>
              <p className="text-2xl text-brand-muted font-light leading-relaxed text-balance">
                Amani Ember Studios is led by the award-winning filmmaker <strong>Raymond Pierlioni</strong>, whose career has consistently redefined cinematic possibility.
              </p>
            </div>
            
            <div className="flex flex-col gap-6 text-lg text-brand-muted font-light leading-relaxed">
              <p>
                Our studio was founded on the belief that the intersection of human emotion and generative technology represents a new horizon for motion pictures. We don't use AI to replace artists; we use it to amplify their vision.
              </p>
              <p>
                As we expand, Amani Ember aims to become the definitive production lighthouse in the field of AI filmmaking, blending soulful narrative craft with synthetic horizons.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-16 mt-6 pt-10 border-t border-brand-border">
              <div className="flex flex-col">
                <span className="text-5xl font-display font-bold text-brand-accent tracking-tighter">12+</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-muted font-bold mt-2">Global Awards</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-display font-bold text-brand-gold tracking-tighter">25+</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-muted font-bold mt-2">AI Productions</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Film className="w-8 h-8 text-brand-accent" />,
              title: "Integrity",
              desc: "We maintain the highest standards of cinematography and performance, ensuring that neural visuals stay rooted in the cinematic tradition."
            },
            {
              icon: <Sparkles className="w-8 h-8 text-brand-gold" />,
              title: "Innovation",
              desc: "Our proprietary workflows leverage the latest in diffusion models and neural rendering to create worlds previously confined to dreams."
            },
            {
              icon: <ArrowUpRight className="w-8 h-8 text-brand-accent" />,
              title: "Distribution",
              desc: "We are building the infrastructure to bring neural epic storytelling to screens across the globe, from festivals to digital premiers."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="p-12 bg-white border border-brand-border group hover:border-brand-accent transition-all duration-500 cinematic-shadow"
            >
              <div className="mb-10 opacity-40 group-hover:opacity-100 transition-opacity duration-500">{feature.icon}</div>
              <h4 className="text-xl font-display font-bold uppercase tracking-[0.2em] mb-4 text-brand-accent group-hover:text-brand-gold transition-colors">{feature.title}</h4>
              <p className="text-brand-muted font-light leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
