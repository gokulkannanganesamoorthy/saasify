import { Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden py-12 border-t border-white/10">
      {/* Fancy Gradient Top Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[2px]" />

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand Area */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            SaaSify
          </h2>
          <p className="text-sm text-zinc-500 mt-2 text-center md:text-left">
            Building the future, one pixel at a time.
          </p>
        </div>

        {/* Compact Links */}
        <div className="flex gap-8 text-sm text-zinc-400 font-medium">
          {['Product', 'Company', 'Resources'].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-white transition-colors hover:scale-105 transform inline-block"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          {[Twitter, Linkedin, Github].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-white/20 transition-all hover:-translate-y-1 shadow-lg shadow-black/50"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* Bottom Credits */}
      <div className="max-w-5xl mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 gap-4">
        <div>&copy; 2025 SaaSify Inc.</div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
          <span>
            Developed by{' '}
            <a
              href="https://gokulkannanganesamoorthy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors hover:underline decoration-zinc-700 underline-offset-4"
            >
              Gokul Kannan Ganesamoorthy
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
