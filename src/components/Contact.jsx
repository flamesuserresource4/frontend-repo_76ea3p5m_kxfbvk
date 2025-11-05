import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-zinc-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Let's connect</h2>
          <p className="text-zinc-400 mt-2">Open to collaborations, freelance projects, and full-time roles.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <form action="mailto:hello@example.com" method="post" encType="text/plain" className="space-y-4 bg-white/5 ring-1 ring-white/10 rounded-xl p-6">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full rounded-lg bg-zinc-900/60 border border-white/10 px-4 py-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-lg bg-zinc-900/60 border border-white/10 px-4 py-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <textarea
              name="message"
              placeholder="Tell me about your project"
              rows={5}
              className="w-full rounded-lg bg-zinc-900/60 border border-white/10 px-4 py-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <button type="submit" className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-medium shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">
              Send message
            </button>
          </form>

          <div className="space-y-4">
            <p className="text-zinc-300 leading-relaxed">
              Prefer email or socials? Reach out directly and I'll get back to you.
            </p>
            <div className="flex items-center gap-3">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                <Mail size={18} /> Email
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                <Github size={18} /> GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
            <div id="about" className="pt-6 text-zinc-400">
              <h3 className="text-white font-semibold mb-2">About me</h3>
              <p>
                I'm a frontend-focused engineer who loves combining strong UX with modern web tech. My stack includes React, TypeScript, and 3D web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
