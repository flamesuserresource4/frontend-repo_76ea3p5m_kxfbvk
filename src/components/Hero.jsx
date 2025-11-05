import { useEffect, useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

function useTypingLoop(words, typingSpeed = 120, pause = 900) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const currentWord = useMemo(() => words[index % words.length], [index, words]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (subIndex < currentWord.length) {
          setSubIndex(subIndex + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, typingSpeed, words.length, currentWord.length]);

  // Pause when the word is fully typed
  useEffect(() => {
    if (subIndex === currentWord.length && !deleting) {
      const pauseTimeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(pauseTimeout);
    }
  }, [subIndex, currentWord.length, deleting, pause]);

  return currentWord.substring(0, subIndex);
}

export default function Hero() {
  const typed = useTypingLoop(['Arnav Raj', 'netxspider']);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Simple blinking cursor using JS to avoid extra CSS
    const interval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === '0' ? '1' : '0';
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full bg-black text-white overflow-hidden">
      {/* Spline background object */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient to ensure text readability; does not block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-36 pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="space-y-6">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-white/10 border border-white/15 text-zinc-200">
              Tech • Portfolio • Modern
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-zinc-300">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                {typed}
              </span>
              <span ref={cursorRef} className="inline-block w-1.5 h-7 md:h-9 bg-white ml-1 align-middle rounded-sm" />
            </h1>

            <p className="text-zinc-200/90 text-base md:text-lg leading-relaxed max-w-2xl">
              Enthusiastic and research-driven Computer Science student with strong foundations in Python, Data Structures, Algorithms, and Machine Learning. Experienced in data manipulation, AI model design, and generative frameworks such as LangChain, Gemini, and PyTorch. Currently exploring large-scale AI systems and foundation models with a focus on efficiency, safety, and scalability. Passionate about contributing to IBM’s innovation in AI research and Watsonx-based intelligent systems through hands-on experimentation and rigorous data analysis.
            </p>

            <div className="flex flex-wrap gap-3 pt-1 text-sm">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-medium shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">
                Explore Projects
              </a>
              <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Profile Photo Card */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_10px_50px_-10px_rgba(0,0,0,0.6)]">
              <img
                src="https://github.com/netxspider.png"
                alt="Arnav Raj profile"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-400/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
