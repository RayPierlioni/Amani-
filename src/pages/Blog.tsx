import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import { SectionHeader } from "../components/ui/LayoutElements";
import { BLOG_POSTS } from "../data/blogPosts";

export default function Blog() {
  return (
    <div className="pt-48 pb-40 px-8 min-h-screen bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          label="The Chronicle" 
          title="Insights // Ideas" 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
          {BLOG_POSTS.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white border border-brand-border overflow-hidden cinematic-shadow transition-all duration-500"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-brand-accent text-[#FBFBFB] text-[9px] font-mono font-bold uppercase tracking-[0.4em]">
                  {post.category}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-6 mb-6 text-[9px] font-mono uppercase tracking-[0.4em] text-brand-muted font-bold">
                  <span className="flex items-center gap-2"><Calendar className="w-3 h-3 text-brand-gold" /> {post.date}</span>
                  <span className="flex items-center gap-2"><User className="w-3 h-3 text-brand-gold" /> {post.author}</span>
                </div>
                
                <h3 className="text-2xl font-display font-bold tracking-tight mb-6 group-hover:text-brand-gold transition-colors line-clamp-2 uppercase leading-none text-brand-accent">
                  {post.title}
                </h3>
                
                <p className="text-sm text-brand-muted font-light leading-relaxed mb-10 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link 
                  to={`/blog/${post.id}`} 
                  className="mt-auto flex items-center gap-4 group/btn text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent group-hover:text-brand-gold transition-colors"
                >
                  Read Update <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
