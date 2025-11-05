import { Download, Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-zinc-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
          <p className="text-zinc-400 mt-2 max-w-2xl">Open to internships, research collaborations, and impactful AI/ML projects. If you'd like to chat, drop a message or connect on socials.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact + Resume */}
          <div className="space-y-4 bg-white/5 ring-1 ring-white/10 rounded-xl p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Say hello</h3>
              <p className="text-zinc-300">Email works best. I usually respond within 24–48 hours.</p>
            </div>
            <a
              href="mailto:arnav@example.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-medium shadow-lg shadow-cyan-500/20 hover:opacity-95 transition"
            >
              <Mail size={18} /> Email me
            </a>

            <div className="pt-4 space-y-2">
              <h4 className="font-semibold">Resume</h4>
              <p className="text-zinc-400">Download a copy of my latest resume.</p>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition"
              >
                <Download size={18} /> Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://github.com/netxspider"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                <span className="inline-flex items-center gap-2"><Github size={18} /> GitHub</span>
                <span className="text-zinc-400">/netxspider</span>
              </a>
              <a
                href="https://www.linkedin.com/in/arnav-raj-41a5a9320/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                <span className="inline-flex items-center gap-2"><Linkedin size={18} /> LinkedIn</span>
                <span className="text-zinc-400">Arnav Raj</span>
              </a>
              <a
                href="https://www.instagram.com/unreal.arnav/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                <span className="inline-flex items-center gap-2"><Instagram size={18} /> Instagram</span>
                <span className="text-zinc-400">@unreal.arnav</span>
              </a>
              <a
                href="mailto:arnav@example.com"
                className="inline-flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                <span className="inline-flex items-center gap-2"><Mail size={18} /> Email</span>
                <span className="text-zinc-400">arnav@example.com</span>
              </a>
            </div>

            <div className="pt-6 text-zinc-400" id="about">
              <h3 className="text-white font-semibold mb-2">About</h3>
              <p>
                I explore large-scale AI systems and foundation models with a focus on efficiency, safety, and scalability — aiming to contribute to IBM’s innovation in AI research and Watsonx-based intelligent systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
