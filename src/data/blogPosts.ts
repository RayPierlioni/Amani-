export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const BLOG_POSTS: Post[] = [
  {
    id: "ai-breakthrough-v5",
    title: "The Genesis of Ember V5: A New Era of Light",
    excerpt: "How our latest custom model is redefining how we process atmospheric lighting in AI-generated cinematography.",
    content: `
# The Genesis of Ember V5

At Amani Ember Studios, we believe that lighting is the soul of cinema. For the past six months, our R&D team has been working on **Ember V5**, a specialized diffusion fine-tune designed specifically for "Sunset Noir" and "Atmospheric Grit."

## Why Lighting Matters

Traditional AI tools often struggle with the complex interplay of light and shadow—what cinematographers call *chiaroscuro*. Ember V5 introduces a specific neural layer that understands volumetric smoke and the way ember light catches dust particles.

### Key Innovations:
1. **Volumetric Consistency**: No more flickering in light beams.
2. **Skin Tone Fidelity**: Preserving realistic texture even in extreme color grades.
3. **Dynamic Contrast**: Truer blacks and more vibrant highlights without blooming.

We are currently deploying this model into our production pipeline for *The Last Dragon of Maine*. The results are, quite simply, breathtaking.
    `,
    date: "May 1, 2026",
    author: "Raymond Pierlioni",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "scouting-maine",
    title: "Scouting locations in the Pine Tree State",
    excerpt: "Our team travels to the deep woods of Maine to gather visual data for our upcoming fantasy epic.",
    content: `
# Scouting Maine

There is a specific kind of mystery in the Maine woods that you can't find anywhere else. The way the mist sits in the pines at 5 AM is exactly the vibe we need for *The Last Dragon of Maine*.

## Merging Reality with AI

While we use AI for our productions, we start with the real world. Our scouting team has captured over 50,000 high-resolution plates of Maine's landscape. These aren't just photos—they are the training data for the world our dragon will inhabit.

> "To make the impossible feel real, you must anchor it in the undeniable truth of the physical world." - Raymond Pierlioni

Stay tuned for more behind-the-scenes updates as we move into the principal generation phase.
    `,
    date: "April 15, 2026",
    author: "Studio News",
    category: "Production",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "future-of-storytelling",
    title: "The AI Telescope: Seeing New Stories",
    excerpt: "Raymond Pierlioni discusses the philosophy behind AI as a tool for expanded creative vision.",
    content: `
# The AI Telescope

I often use the analogy that AI is a telescope. It doesn't write the story for us, but it allows us to see further than our budget or physics would otherwise allow.

## Breaking the Budget Barrier

For decades, epic storytelling was reserved for the major studios with $200M budgets. Today, a small group of visionary artists can create visuals of equal scale. This democratization of the 'Epic' is what excites me most about this era.

We are no longer limited by what we can build on a backlot, but only by the scale of our imagination.
    `,
    date: "March 20, 2026",
    author: "Raymond Pierlioni",
    category: "Philosophy",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1200"
  }
];
