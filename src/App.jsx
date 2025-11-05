import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 text-zinc-400 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Arnav Raj (netxspider). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/netxspider" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://www.linkedin.com/in/arnav-raj-41a5a9320/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="https://www.instagram.com/unreal.arnav/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
