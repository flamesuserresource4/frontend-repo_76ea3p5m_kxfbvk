import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Lullaby',
    description:
      'A serene, AI-assisted music and sleep companion that curates calming soundscapes with gentle visuals.',
    tags: ['React', 'Web Audio', 'UX'],
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Stock News AI Summarizer',
    description:
      'Real-time financial news summarization powered by LLMs to extract market-moving insights at a glance.',
    tags: ['LLM', 'LangChain', 'Vite'],
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Annadata — Farmer Copilot & Marketplace',
    description:
      'A farmer-first platform pairing an advisory copilot with a trusted marketplace to elevate productivity.',
    tags: ['AI', 'Next.js', 'Design'],
    image:
      'https://images.unsplash.com/photo-1500937386664-56e01d7a52e1?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-black to-zinc-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="text-zinc-400 mt-2">Curated work that blends engineering with thoughtful design.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:ring-white/20 transition relative">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-zinc-300 mt-2 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-white/5 ring-1 ring-white/10 text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a href={p.link} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                    View project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub Stats */}
        <div id="stats" className="mt-20">
          <h3 className="text-2xl font-semibold">GitHub Stats</h3>
          <p className="text-zinc-400 mt-1">A quick glance at my open-source activity.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <img
              src="https://github-readme-stats.vercel.app/api?username=netxspider&show_icons=true&theme=tokyonight&hide_border=true"
              alt="GitHub stats"
              className="w-full rounded-xl ring-1 ring-white/10 bg-white/5"
              loading="lazy"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=netxspider&layout=compact&theme=tokyonight&hide_border=true"
              alt="Top languages"
              className="w-full rounded-xl ring-1 ring-white/10 bg-white/5"
              loading="lazy"
            />
          </div>
          <div className="mt-4">
            <a
              href="https://github.com/netxspider"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
            >
              Visit my GitHub <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
