import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description:
      'A playful landing page integrating Spline 3D with smooth interactions and responsive layout.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description:
      'Performance-focused analytics dashboard with live data and elegant motion micro-interactions.',
    tags: ['Vite', 'WebSockets', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'API-First Starter',
    description:
      'Robust starter kit featuring FastAPI, MongoDB, and a clean React frontend architecture.',
    tags: ['FastAPI', 'MongoDB', 'React'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-black to-zinc-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
          <p className="text-zinc-400 mt-2">A few things I loved building recently.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/7.5 transition relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_40%)] opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <Code size={18} className="text-cyan-400" />
              </div>
              <p className="text-zinc-300 mt-2 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-white/5 ring-1 ring-white/10 text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a href={p.link} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                  View project <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
