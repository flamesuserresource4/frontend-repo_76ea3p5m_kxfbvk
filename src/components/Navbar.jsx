import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-white font-semibold tracking-tight text-lg">My Portfolio</a>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:hello@example.com" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>

          <button className="md:hidden p-2 text-zinc-300 hover:text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="flex items-center gap-3 pt-2">
              <a href="mailto:hello@example.com" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
