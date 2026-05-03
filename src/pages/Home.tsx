import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { SectionHeader, ProductionCard } from "../components/ui/LayoutElements";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[110vh] flex items-center justify-center overflow-hidden px-8 bg-white">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1492691523567-6170c3295db6?auto=format&fit=crop&q=80&w=2000" 
            alt="Cinematic Background" 
            className="w-full h-full object-cover opacity-10 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-light/50 to-brand-light" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center pt-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-16"
          >
            <div className="flex flex-col gap-8">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.5 }}
                className="font-mono text-[10px] uppercase tracking-[0.8em] font-bold text-brand-muted"
              >
                Cinematic Intelligence
              </motion.span>
              
              <h1 className="text-7xl md:text-[14rem] font-display font-extrabold leading-[0.8] tracking-tighter uppercase mb-6 text-balance text-brand-accent">
                The New <br />
                <span className="font-serif italic font-light opacity-80 text-brand-gold">Renaissance</span>
              </h1>
            </div>
            
            <p className="max-w-xl text-xl md:text-2xl text-brand-muted font-light leading-relaxed tracking-tight">
              Amani Ember is a next-generation production house defining the future of cinematic storytelling through the lens of human emotion and generative tools.
            </p>

            <div className="flex flex-col md:flex-row gap-8 mt-12">
               <Link to="/productions">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    className="px-16 py-6 border border-brand-accent transition-all bg-brand-accent text-white font-display uppercase tracking-[0.3em] text-[10px] font-bold rounded-full group overflow-hidden relative"
                  >
                    <span className="relative z-10">View Productions</span>
                    <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </motion.button>
               </Link>
               <motion.button 
                  whileHover={{ scale: 1.02 }}
                  className="px-16 py-6 border border-brand-border hover:border-brand-accent transition-all bg-white text-brand-accent font-display uppercase tracking-[0.3em] text-[10px] font-bold rounded-full backdrop-blur-md"
                >
                  Our Vision
                </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-brand-border to-transparent" />
        </motion.div>
      </section>

      {/* Featured Works */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            label="In Production" 
            title="Current Works" 
          />
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <ProductionCard 
              title="The Last Dragon of Maine"
              status="Pre-Production"
              image="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200"
              description="A grounded fantasy drama about childhood grief, found friendship, and the quiet magic surviving in forgotten places."
              slug="last-dragon"
            />
            <ProductionCard 
              title="The Count of Monte Cristo Western"
              status="Post-Production"
              image="https://images.unsplash.com/photo-1533167649158-6d508895b680?auto=format&fit=crop&q=80&w=1200"
              description="A sweeping revenge story set in the brutal landscape of the American frontier."
              slug="western-monte-cristo"
            />
          </div>

          <div className="mt-32 flex justify-center">
             <Link to="/productions" className="group flex items-center gap-4 font-mono uppercase tracking-[0.4em] text-[10px] text-brand-muted hover:text-brand-accent transition-all">
                The Complete Library <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
             </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="section-padding border-t border-brand-border bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <h2 className="text-4xl md:text-7xl font-display font-medium tracking-tighter uppercase leading-[0.9] text-balance text-brand-accent">
              We weave <br />
              <span className="font-serif italic font-light opacity-60 text-brand-gold">Digital Souls</span> <br />
              into Cinema.
            </h2>
            <div className="flex flex-col gap-8">
              <p className="text-xl text-brand-muted font-light leading-relaxed">
                Innovation is not the replacement of the artist, but the expansion of their vision. We use neural architecture as a brush to paint stories that transcend traditional constraints.
              </p>
              <Link to="/studio" className="w-fit flex items-center gap-4 font-mono uppercase tracking-[0.4em] text-[10px] text-brand-gold hover:translate-x-2 transition-transform font-bold">
                Read our Vision <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
