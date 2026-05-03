import { motion } from "motion/react";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { SectionHeader } from "../components/ui/LayoutElements";

export default function Contact() {
  return (
    <div className="pt-48 pb-40 px-8 min-h-screen bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          label="Contact" 
          title="Studio // Liaison" 
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <p className="text-2xl text-brand-muted font-light leading-relaxed text-balance">
                Whether you're a talent looking for representation, a brand seeking cinematic vision, or a partner with a dream—we're here to listen.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white border border-brand-border rounded-full flex items-center justify-center group-hover:border-brand-accent transition-all cinematic-shadow">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold mb-1">Email Details</span>
                  <p className="text-xl font-display font-bold text-brand-accent italic uppercase">contact@amaniember.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white border border-brand-border rounded-full flex items-center justify-center group-hover:border-brand-accent transition-all cinematic-shadow">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold mb-1">Our Base</span>
                  <p className="text-xl font-display font-bold text-brand-accent italic uppercase">New York // London // Global</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white border border-brand-border rounded-full flex items-center justify-center group-hover:border-brand-accent transition-all cinematic-shadow">
                  <MessageSquare className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold mb-1">Social Feed</span>
                  <p className="text-xl font-display font-bold text-brand-accent italic uppercase">@amani_ember</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-16 border border-brand-border cinematic-shadow"
          >
            <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-4">
                  <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Cassian Andor"
                    className="bg-brand-light border border-brand-border p-5 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-muted/30 font-display"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="cassian@ferrix.com"
                    className="bg-brand-light border border-brand-border p-5 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-muted/30 font-display"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold ml-1">Subject</label>
                <select className="bg-brand-light border border-brand-border p-5 focus:outline-none focus:border-brand-accent transition-colors text-brand-accent font-display appearance-none">
                   <option>Production Inquiry</option>
                   <option>Talent / Casting</option>
                   <option>Investor Relations</option>
                   <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-4">
                <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold ml-1">Vision / Message</label>
                <textarea 
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="bg-brand-light border border-brand-border p-5 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-muted/30 resize-none font-display"
                />
              </div>

              <button className="w-full py-6 bg-brand-accent text-white font-display font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-brand-gold transition-all duration-500 cinematic-shadow rounded-full group text-[10px]">
                Transmit Signal <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
