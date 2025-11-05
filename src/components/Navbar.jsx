import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
    >
      {children}
    </a>
  );

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between h-14 px-3">
            <a href="#home" className="text-white font-semibold tracking-tight text-base md:text-lg">Arnav Raj</a>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#stats">GitHub Stats</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <a href="mailto:arnav@example.com" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/netxspider" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/arnav-raj-41a5a9320/" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>

            <button className="md:hidden p-2 text-zinc-300 hover:text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-3 pb-3 flex flex-col gap-2">
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#stats">GitHub Stats</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <div className="flex items-center gap-2 pt-1">
                <a href="mailto:arnav@example.com" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="Email">
                  <Mail size={18} />
                </a>
                <a href="https://github.com/netxspider" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/arnav-raj-41a5a9320/" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
