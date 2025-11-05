import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center min-h-[70vh]">
        <div className="relative h-[50vh] md:h-[70vh] rounded-xl overflow-hidden ring-1 ring-white/10 bg-zinc-900">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-sm text-zinc-300">
            <Rocket size={16} className="text-cyan-400" />
            <span>Tech • Interactive • Modern</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">Your Name</span>
          </h1>
          <p className="text-zinc-300 text-lg leading-relaxed">
            I craft playful, performant web experiences with a focus on delightful interactions and solid engineering.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:opacity-95 transition"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 ring-1 ring-white/20 text-white font-medium hover:bg-white/15 transition"
            >
              Contact Me
            </a>
          </div>
          <div className="flex flex-wrap gap-3 pt-2 text-sm text-zinc-400">
            <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">React</span>
            <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">TypeScript</span>
            <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">FastAPI</span>
            <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">3D Web</span>
          </div>
        </div>
      </div>
    </section>
  );
}
