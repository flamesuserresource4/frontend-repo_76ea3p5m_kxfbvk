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
        <div className="max-w-6xl mx-auto px-4 py-8 text-zinc-500 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
