import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { BLOG_POSTS } from "../data/blogPosts";

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-48 pb-24 px-6 text-center">
        <h1 className="text-4xl font-display font-bold uppercase mb-8">Post Not Found</h1>
        <Link to="/blog" className="text-brand-ember hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-40 px-8 min-h-screen bg-brand-light">
      <motion.article 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <Link to="/blog" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-brand-muted hover:text-brand-accent transition-colors mb-20 group font-bold">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Archives
        </Link>

        {/* Hero */}
        <div className="mb-24">
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-4">
               <div className="w-12 h-px bg-brand-border" />
               <span className="text-brand-gold font-mono text-[9px] uppercase tracking-[0.4em] font-bold">{post.category}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-none italic text-brand-accent">
              {post.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-10 mb-16 text-[10px] font-mono uppercase tracking-[0.4em] text-brand-muted font-bold">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-brand-gold" /> {post.date}</span>
            <span className="flex items-center gap-2"><User className="w-4 h-4 text-brand-gold" /> {post.author}</span>
            <button className="flex items-center gap-2 hover:text-brand-accent transition-colors"><Share2 className="w-4 h-4 text-brand-gold" /> Share</button>
          </div>

          <div className="aspect-video overflow-hidden relative border border-brand-border cinematic-shadow bg-white">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Content */}
        <div className="markdown-body prose prose-brand-gold max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-8 text-brand-accent">{children}</h1>,
              h2: ({ children }) => <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-6 mt-16 text-brand-accent border-l-4 border-brand-accent pl-8">{children}</h2>,
              h3: ({ children }) => <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-4 mt-12 text-brand-accent">{children}</h3>,
              p: ({ children }) => <p className="text-xl text-brand-muted font-light leading-relaxed mb-8">{children}</p>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-brand-gold bg-brand-gold/5 p-10 my-16 italic text-2xl text-brand-accent font-serif font-light">
                  {children}
                </blockquote>
              ),
              ul: ({ children }) => <ul className="list-disc pl-8 mb-8 text-brand-muted space-y-4">{children}</ul>,
              li: ({ children }) => <li className="text-lg text-brand-muted font-light">{children}</li>,
              strong: ({ children }) => <strong className="text-brand-accent font-bold">{children}</strong>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="mt-32 pt-16 border-t border-brand-border flex flex-col items-center text-center gap-10">
           <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-muted font-bold opacity-30">End of Record</p>
           <button className="px-16 py-6 bg-brand-accent text-white font-display uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-brand-gold transition-colors cinematic-shadow rounded-full">
             Join The Chronicle
           </button>
        </div>
      </motion.article>
    </div>
  );
}
